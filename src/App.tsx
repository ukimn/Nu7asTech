import Header from "./components/Header"
import MainBody from "./components/MainBody"
import Skills from "./components/Skills"
import ContactForm from "./components/ContactUs"
import Footer from "./components/Footer"
import { useTheme } from "./components/Context"
const App = () => {
  const {theme} = useTheme();
  return (
    <div className="temp" style={{backgroundColor: theme ? "#FFFAE8" : "#191919"}}>
        <Header/>
        <MainBody/>
        <Skills/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default App
