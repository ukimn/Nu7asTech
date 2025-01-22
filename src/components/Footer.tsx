import { useTheme } from "./Context"
const Footer = () => {
    const {theme} = useTheme();
  return (
    <div className="footer" style={{background: theme ? "#FFFAE8" : "linear-gradient(145deg, #191919, #111)"}}>
      <h1 className="heading">Made by Nu7as tech</h1>
    </div>
  )
}

export default Footer
