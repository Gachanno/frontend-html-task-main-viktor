import { useState } from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";

library.add(fas);

const App = () =>{
    const [theme, setTheme] = useState('light')
      return (
        <>
          <Sidebar color={theme} />
          <button onClick={()=>{theme === 'light' ? setTheme('dark') : setTheme('light')}}>Сменить тему</button>
        </>
      )
}

export default App