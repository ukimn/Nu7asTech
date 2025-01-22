import { Player } from "@lottiefiles/react-lottie-player";
import success from "../assets/success.json";

const Sent = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "300px",
          width: "300px",
          backgroundColor: "#fff", // Background color based on theme
          borderRadius: "10px",
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px", // Adds some padding for spacing
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional: adds shadow for better visibility
        }}
      >
        <h1
          className="contact-heading"
          style={{
            color: "black",
            marginBottom: "10px", // Ensures spacing between the title and the animation
          }}
        >
          Message Sent!
        </h1>
        <span className="headline"></span>
        <Player
          src={success}
          autoplay
          loop
          style={{ width: "150px", height: "150px" }}
        />
      </div>
    </div>
  );
};

export default Sent;
