import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  // case 1: Runs on every render
  // useEffect(() => {
  //   alert("I will run on every render");
  // })

  // case 2: Runs only on first render
  // useEffect(() => {
  //   alert("I will run only on first render when the component is mounted");
  // },[])

  // case 3: Runs only when certain values change
  // useEffect(() => {
  //   alert("I am running because count was changed");
  // }, [count])

  // case 4: return will be executed when the component is unmounted
  // useEffect(() => {
  //   alert("This is the first render of the component");
  //   return () => {
  //     alert("Component was removed/unmounted");
  //   }
  // }, [])

  const countHandler = () => {
    setCount(c => c+1);
  }

  useEffect(() => {
    alert("Hey welcome to my page!");
  }, []);

  useEffect(() => {
    alert("Count was changed!"); //count was initially set to zero so it will trigger at the beginning too
  }, [count]);

  return (
    <div className="App">
      <Navbar color = {"blue" + count} count = {count}/>
      <p>{count}</p>
      <button onClick={countHandler}>Increase Count</button>
    </div>
  );
}

export default App;
