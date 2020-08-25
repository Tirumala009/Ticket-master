import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelopeOpen,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

class Contact extends React.Component {
  render() {
    return (
      <div className="contactus">
        <div className="contact">
          <h3 className="contact-heading"> Contact Me</h3>

          <p>
            {" "}
            <FontAwesomeIcon className="contact-icon" icon={faPhoneAlt} />
            Contact No : 0899651555
          </p>
          <p>
            {" "}
            <FontAwesomeIcon className="contact-icon" icon={faEnvelopeOpen} />
            Email : kumaruppu009@gmail.com
          </p>
          <p>
            <FontAwesomeIcon className="contact-icon" icon={faLink} />
            LinkedIn: linkedin.com/in/tirumala-kumar-vuppu
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
