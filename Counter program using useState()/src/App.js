import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // let counter = 0;
  const [counter, setCounter] = useState(0); //this is called state
  const increaseHandler = () => {
    //counter++;
    setCounter(counter+1);
  }
  const dereaseHandler = () => {
    // counter--;
    setCounter(counter-1);
  }
  return (
    <div className="App">
      <p>The value of the counter is {counter}</p>
      <button onClick={increaseHandler}>Increase by 1</button>
      <button onClick={dereaseHandler}>Increase by 2</button>
    </div>
  );
}

export default App;
