import React from "react";
import './App.css';

import Test1 from "./Test1";
import Test2 from "./Test2";

function App() {
  return (
    <div className="App">
      <h1>l5_t5, задание 1: жизненный цикл компонента</h1>
      <Test1  arg={77} />
      <Test2  arg={77} />
    </div>
  );
}

export default App;
