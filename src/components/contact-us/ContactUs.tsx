import logo from "../../assets/react.svg";
import "./ContactUs.css";

const ContactUs: React.FC = () => {
  return (
    <section className="contact-us">
      <div className="contact-us-card">
        <div className="contact-us-form-logo-col">
          <img
            src={logo}
            alt="Uncharted Voyage Logo"
            className="contact-us-logo"
            height={400}
            width={200}
          />
        </div>
        <div className="contact-us-form-col">
          <span className="contact-us-form-title">Ready for next Voyage?</span>
          <span className="contact-us-form-subtitle">
            Allow us to call you back!
          </span>
          <form className="contact-us-form">
            <div className="contact-us-form-group">
              <label htmlFor="name">Name</label>
              <div className="contact-us-input-icon-wrap bordered">
                <span className="contact-us-input-icon">👤</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>
            <div className="contact-us-form-group">
              <label htmlFor="phone">Phone Number</label>
              <div className="contact-us-input-icon-wrap bordered">
                <span className="contact-us-input-icon">📞</span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
            </div>
            <div className="contact-us-form-group">
              <label htmlFor="email">Email Id</label>
              <div className="contact-us-input-icon-wrap bordered">
                <span className="contact-us-input-icon">✉️</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="contact-us-form-group">
              <label htmlFor="message">Message</label>
              <div className="contact-us-input-icon-wrap bordered">
                <span className="contact-us-input-icon">💬</span>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={3}
                />
              </div>
            </div>
            <button type="submit" className="contact-us-form-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
