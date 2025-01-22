import { useForm, ValidationError } from "@formspree/react";
import Lottie from "react-lottie";
import { FaHeadset } from "react-icons/fa";
import success from "../assets/success.json";
import message from "../assets/colored.json";
import { useTheme } from "./Context";

function ContactForm() {
  const [state, handleSubmit] = useForm("xanqwnwq");
  const {theme} = useTheme();
  return (
    <div className="main-body-contact" id="contact">
      <div className="body-contact">
        <h1 className="contact-heading" style={{color: theme ? "black" : "#fff"}}>
          {" "}
          Get in <span>Touch</span> <FaHeadset />{" "}
        </h1>
        <span className="headline"></span>
        <form onSubmit={handleSubmit} className="card-contact">
          <div className="img">
            <Lottie
              options={{ animationData: message }}
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className="content">
            <h1>Contact Form</h1>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea id="message" name="message" placeholder="Message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              {state.submitting ? "Submitting..." : "Submit"}
            </button>
            {state.succeeded && (
              <Lottie
                options={{ animationData: success }}
                style={{ width: "150px", height: "150px" }}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
