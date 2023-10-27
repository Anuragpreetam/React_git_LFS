import React from "react";
import  ReactDOM  from "react-dom/client";
import  Body  from "./components/Body";


const root = document.getElementById('root')

//babel transpiles JSX to browser understandable javascript (like react.createElement)
console.log(<Body></Body>)
ReactDOM.createRoot(root).render(<Body/>)

