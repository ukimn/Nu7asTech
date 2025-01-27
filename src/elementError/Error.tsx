import { Link } from "react-router-dom"
import notFound from '../assets/notFound.json'
import { Player } from "@lottiefiles/react-lottie-player"
import { motion } from "framer-motion"
const Error = () => {
  return (
    <motion.div className="error-page" initial={{x: '100vw'}} animate={{x: 0}} transition={{type: "spring", duration: 0.9, delay: 0.6}}>
        <h1 className="heading">PAGE NOT FOUND 404!</h1>
        <Player src={notFound} loop autoplay style={{width: "300px"}}/>
        <Link to={"/"}>
            <button className="button">Go Back</button>
        </Link>
    </motion.div>
  )
}

export default Error
