import { createContext, useState } from "react"
import ReacSwitch from "react-switch";
import Form from "./components/Form"
import './App.css'

interface ContextProps {
  theme: string,
  toggleTheme: () => void;
}

export  const ThemeContext = createContext({} as ContextProps)

function App() {
  const [theme, setTheme] = useState("ligth")

  const toggleTheme = () => {
    setTheme(corr => (corr === 'light' ?  'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
      <Form/>
      <ReacSwitch onChange={toggleTheme} checked={theme === "dark"}/>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
