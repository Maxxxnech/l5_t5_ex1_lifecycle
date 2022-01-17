import React, { useState, useEffect } from "react";

function Test2({arg}) {
  console.log('%cset func state by useState', "color:olivedrab")
  //Изменение стейтов приводит к вызову всей функции
  const [s1, setS1] = useState(arg);

  const buttonHandler = () => {
    console.log('buttonHandler_func')
    let val = s1;
    val++;
    setS1(val);
  };

  //Cрабатывает при эффектах внутри компонента ПОСЛЕ отрисовки (рендера)
  //Срабатывает при первой отрисовке и после каждого обновления
  //Принимает в качестве аргумента функцию
  useEffect(()=> {
    console.log("%cuseEffect", "color:lime")
  });

  console.log("%crender1_func", "color:orange");
  return (
    <>
      {console.log("%crender2_func", "color:orange")}
      <div>{<button onClick={buttonHandler}>Push (func comp)</button>}</div>
      <div>{s1}</div>
    </>
  );
}
export default Test2;
