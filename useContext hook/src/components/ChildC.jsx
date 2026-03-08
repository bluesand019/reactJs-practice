import React from 'react'
import { UserContext, } from '../App'
import { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
    const user = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);

    function handleThemeChange() {
        theme==='light'? setTheme('dark') : setTheme('light');
    }

  return (
    <div>
      <p style={{color:theme==='light' ? 'black':'white'}}>{user.name}</p>
      <button onClick={handleThemeChange}>Change theme</button>
    </div>
  )
}

export default ChildC
