import { Link } from "react-router-dom"
import notFound from '../assets/notFound.json'
import { Player } from "@lottiefiles/react-lottie-player"
const Error = () => {
  return (
    <div className="error-page">
        <h1 className="heading">PAGE NOT FOUND 404!</h1>
        <Player src={notFound} loop autoplay style={{width: "300px"}}/>
        <Link to={"/"}>
            <button className="button">Go Back</button>
        </Link>
    </div>
  )
}

export default Error
