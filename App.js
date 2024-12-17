import React from "react";
import Counter from "./components/Counter";
import './App.css';


const App = () => {
  return (
    <div className="app-content">
      <h1>Redux Counter App</h1>
      <Counter />
    </div>
  )
}


export default App;