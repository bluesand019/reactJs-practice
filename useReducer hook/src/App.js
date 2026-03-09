import './App.css';
import { useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

//reducer function should be outside of component
function reducer(state, action) {
  switch(action.type) {
    case ACTIONS.INCREMENT:
      return {count: state.count + action.payload}
    case ACTIONS.DECREMENT:
      return {count: state.count - action.payload}
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count:0});

  const increment = () => {
    dispatch({type: ACTIONS.INCREMENT, payload: 1});
  }
  const decrement = () => {
    dispatch({type: ACTIONS.DECREMENT, payload: 1});
  }
  const incrementByFive = () => {
    dispatch({type: ACTIONS.INCREMENT, payload: 5});
  }

  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
      <button onClick={incrementByFive}>+5</button>
    </div>
  );
}

export default App;
