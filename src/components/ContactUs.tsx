import { useForm, ValidationError } from "@formspree/react";
import { FaHeadset } from "react-icons/fa";
import message from "../assets/colored.json";
import { useTheme } from "./Context";
import { Player } from "@lottiefiles/react-lottie-player";
import Sent from "./Sent";

function ContactForm() {
  const [state, handleSubmit] = useForm("xanqwnwq");
  const { theme } = useTheme();

  if (state.succeeded) {
    return <Sent />;
  }

  return (
    <div className="main-body-contact" id="contact">
      <div className="body-contact">
        {/* Header Section */}
        <h1
          className="contact-heading"
          id={`${theme ? "light-mode-color" : "dark-mode-color"}`}
        >
          Get in <span>Touch</span> <FaHeadset />
        </h1>
        <span className="headline"></span>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="card-contact">
          {/* Lottie Animation */}
          <div>
            <Player
              src={message}
              autoplay
              loop
              style={{ width: "300px", height: "300px" }}
              className="img"
              />
          </div>

          <div className="content">
            {/* Email Input */}
              <h1>Contact Form</h1>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            {/* Message Input */}
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            {/* Submit Button */}
            <button type="submit" disabled={state.submitting}>
              {state.submitting ? "Submitting..." : "Submit"}
            </button>

            {/* Success Animation */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
