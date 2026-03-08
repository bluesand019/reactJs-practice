import './App.css';
import { createContext, useState } from 'react';
import ChildA from './components/ChildA';

//useContext helps avoiding prop drilling
//step 1: create Context
const UserContext = createContext();
//step 2: wrap all the child inside a Provider
//step 3: pass the value
//step 4: consume the value inside the consumer

const ThemeContext = createContext();

function App() {
  const [user, setUser] = useState({name:"kowsor"});
  const [theme, setTheme] = useState('light');
  return (
  <>
  <UserContext.Provider value={user}>
    <ThemeContext value={{theme, setTheme}}>
      <div className="container" style={{backgroundColor:theme==='light'?'bisque':'black'}}>
        <ChildA />
      </div>
    </ThemeContext>
  </UserContext.Provider>
  </>
  );
}

export default App;
export {UserContext};
export {ThemeContext};