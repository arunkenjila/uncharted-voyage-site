import React from "react";
import "./Explore.css";
import saleImg1 from "../../assets/sale-1.jpg";
import saleImg2 from "../../assets/sale-2.jpg";
import saleImg3 from "../../assets/sale-3.jpg";

const Explore: React.FC = () => (
  <section className="explore">
    <div className="explore-overlay">
      <div className="explore-text">
        <div className="f1">Explore Hornbill Festival</div>
        <div className="f2">With</div>
        <div className="f3">Uncharted Voyage’s</div>
        <div className="f4">Early Bird</div>
        <div className="explore-sale">SALE</div>
      </div>
      <div className="explore-cards">
        {[
          {
            img: saleImg1,
            title: "Complete Hornbill",
            price: "Starting Price Rs. 9,999/-",
          },
          {
            img: saleImg2,
            title: "Adventurous Hornbill",
            price: "Starting Price Rs. 7,999/-",
          },
          {
            img: saleImg3,
            title: "Adventure Retreat",
            price: "Starting Price Rs. 5,899/-",
          },
        ].map((card, i) => (
          <div
            className="explore-card"
            key={i}
            style={{ backgroundImage: `url(${card.img})` }}
          >
            <div className="explore-card-overlay">
              <div className="explore-card-title">{card.title}</div>
              <div className="explore-card-price">{card.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Explore;
