import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  // let a = 0;

  // useEffect(() => {
  //   a = a+1; // the value of a is not changing because its re rendering every time from the beginning where a becomes 0 every time
  //   alert("I will run on every render");
  //   console.log(a);
  // });


  //to persist the value of a variable across every render we use useRef
  const a = useRef(0);
  //useRef doesn't re render the component. so If you want some stuffs to do
  //where the component needs to re-render, then useState will be your choice
  useEffect(() => {
    a.current = a.current + 1;
    alert("I will run on every render");
    console.log(`value of a is ${a.current}`);
  });

  //another use case of useRef is referencing an html element to manipulate the DOM
  const buttonRef = useRef();
  //lets change the color of the Button when the component mounts
  useEffect(() => {
    buttonRef.current.style.backgroundColor = "red";
  }, [])


  const increaseHandler = () => {
    setCount((c) => c + 1);
  };
  return (
    <div className="App">
      <p>{count}</p>
      <button ref={buttonRef} onClick={increaseHandler}>Increase</button>
    </div>
  );
}

export default App;
