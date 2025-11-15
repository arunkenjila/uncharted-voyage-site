import React from "react";
import "./ExploreNorthEast.css";
import sikkimImg from "../../assets/sikkim.jpg";
import nagalandImg from "../../assets/nagaland.jpg";
import arunachalImg from "../../assets/arunachal.jpg";
import meghalayaImg from "../../assets/meghalya.jpg";
import assamImg from "../../assets/assam.jpg";

const states = [
  { name: "Sikkim", img: sikkimImg, price: "Starting Price Rs. 9,999/-" },
  { name: "Nagaland", img: nagalandImg, price: "Starting Price Rs. 9,999/-" },
  { name: "Arunachal", img: arunachalImg, price: "Starting Price Rs. 9,999/-" },
  { name: "Meghalaya", img: meghalayaImg, price: "Starting Price Rs. 9,999/-" },
  { name: "Assam", img: assamImg, price: "Starting Price Rs. 9,999/-" },
];

const ExploreNorthEast: React.FC = () => (
  <section className="explore-north-east">
    <div className="explore-ne-bg">
      <div className="explore-ne-hero">
        <h2 className="explore-ne-title">Explore Northeast India</h2>
        <p className="explore-ne-subtitle">
          A journey through Culture, People and Nature
        </p>
        <button className="explore-ne-btn">Explore</button>
      </div>
    </div>
    <div className="explore-ne-cards">
      {states.map((state, idx) => (
        <div
          className="explore-ne-card"
          key={idx}
          style={{ backgroundImage: `url(${state.img})` }}
        >
          <div className="explore-ne-card-info">
            <div className="explore-ne-card-title">{state.name}</div>
            <div className="explore-ne-card-price">{state.price}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExploreNorthEast;
