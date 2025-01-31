import Header from "./components/Header"
import MainBody from "./components/MainBody"
import Skills from "./components/Skills"
import ContactForm from "./components/ContactUs"
import Footer from "./components/Footer"
import { useSelector } from "react-redux"
const App = () => {
  const theme = useSelector((state: { theme: boolean }) => state.theme);
  return (
    <div className="temp" id={`${theme ? "white" : "dark"}`}>
        <Header/>
        <MainBody/>
        <Skills/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default App
