import React, { Component } from "react";

class Test1 extends Component {
  log = console.log("%cpre-constructor","color:darkblue");
  //Конструктор запускается один раз 
  // Не перезапускается при обновлениях
  constructor(props) {
    console.clear();
    console.log("%cconstructor", "color:blue");
    console.log(props);
    super(props);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.state = { s1: 0 };
  }
  
  buttonHandler() {
    console.log('buttonHandler_class')
    let val = this.state.s1;
    val++;
    this.setState((prevState) => ({ s1: val }));
  }
  

  // Позволяет при перерисовке компонента проверить, не изменились ли ПРОПСЫ и присвоить их стейтам
  // Запускается первый раз при инициализации и при КАЖДОЙ перерисовке (в отличие от конструктора). 
  // При перерисовке запускается ПЕРЕД рендером.
  // Если родительский компонент (App.js) изменит пропсы, то данный компонент подхватит их корректно
  // Статические методы - методы, к которым можно обратиться без создания экземпляра объекта
  static getDerivedStateFromProps(props, state){
     console.log('%cgetDerivedStateFromProps', "color:green");
     //Либо возвращает новые стейты, либо null - ничего не изменилось
      return null;
      //return ({s1: props.arg})
  }
 
  // Запускается единственный раз - после того, как компонент был выведен и закончил отрисовку
  // Отработает ПОСЛЕ конструктора, статического метода и рендера
  // Используется чтобы запускать код после того, как компонент был смонтирован и впревые появился на странице
  // Запускаетя ОДИН раз (как и конструктор). Не работает при обновлениях
  componentDidMount(){
    console.log('%ccomponentDidMount', "color:blue");
  }

  // Запускается только при обновлении существующего компонента
  // Запускается после рендера
  // Используется, если нужно что-то делать после каждого обновления компонента
  componentDidUpdate(){
    console.log('%ccomponentDidUpdate', "color:darkgreen");
  }

  //Запускается при каждом обновлении (как и getDerivedStateFromProps)
  render() {
    console.log("%crender1_class", "color:red");
    return (
      <>
        {console.log("%crender2_class", "color:red")}
        <div>
          <button onClick={this.buttonHandler}>Push (class comp)</button>
        </div>
        <div>
          {this.state.s1}
        </div>
      </>
    );
  }
}

export default Test1;
