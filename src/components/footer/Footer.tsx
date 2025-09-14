import React from "react";
import "./footer.css";

const journalItems = [
  "Hornbill Festival 2024",
  "Discover 17 major Tribes of Nagaland",
  "Best time to Visit Dzukou Valley",
  "10 best waterfalls in Meghalaya",
  "Winter Tawang and Kaziranga guide",
];

const quickLinks = [
  "Privacy Policy",
  "Cancellation Policy",
  "Refund Policy",
  "Terms & Conditions",
];

const socialLinks = [
  { label: "Instagram", value: "uncharted.voyage_" },
  { label: "Phone", value: "+91 98647 93676" },
  { label: "Email", value: "contact.unchartedvoyage@gmail.com" },
];

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="footer-col about-us">
        <h3 className="footer-title">About Us</h3>
        <p className="footer-desc">
          We at Uncharted Voyage are a modern travel crew that provides end to
          end travel packages in Northeast India and promoting cultural tourism.
          We design the best travel itineraries that encourage group traveling
          for like-minded people. Our services include road trips, trekking
          expeditions, collage trips, and customized tour packages. On our
          trips, we ensure hassle-free traveling, top-notch accommodation and
          guided sightseeing with the help of local communities that too in a
          budget that won't burn a hole in your pocket. Just give us your dates
          and be ready next voyage like never before.
        </p>
      </div>
      <div className="footer-col journal">
        <h3 className="footer-title">Our Journal</h3>
        <ul className="footer-list">
          {journalItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="footer-col quick-links">
        <h3 className="footer-title">Quick Links</h3>
        <ul className="footer-list">
          {quickLinks.map((link, idx) => (
            <li key={idx}>{link}</li>
          ))}
        </ul>
        <div className="footer-social">
          <h3 className="footer-title">Social Links</h3>
          {socialLinks.map((item, idx) => (
            <div key={idx} className="footer-social-item">
              <span className="footer-social-label">{item.label}:</span>{" "}
              {item.value}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
