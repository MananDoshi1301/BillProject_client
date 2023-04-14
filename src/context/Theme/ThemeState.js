import { ThemeContext } from "./ThemeContext";

const ThemeState = (props) => {

  return (
    <ThemeContext.Provider value={{}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeState;