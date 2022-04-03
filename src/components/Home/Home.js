import React from "react";
import { Link } from "react-router-dom";
import HomeImg from "../../images/galaxy-book-pro.jpg";
import Reviews from "../Reviews/Reviews";
import "./Home.css";

const Home = () => {
  const color = { color: "#2600ff" };
  return (
    <div className="container">
      <div className="row align-items-center mt-4">
        <div className="col-md-6">
          <h1>Your next laptop</h1>
          <h1 style={color}>Your best laptop</h1>
          <p className="fs-4 text-justify mt-2 text-secondary">
            The best laptop of 2022 can come with a variety of brands, prices,
            and features. Here, we've given you the best laptops. Instant
            discounts up to ₹500 on your laptop and free delivery for students.
          </p>
          <Link to="/Home" className="btn btn-outline-primary">
            Shop Now
          </Link>
        </div>
        <div className="col-md-6">
          <img src={HomeImg} alt="" className="img-fluid mx-auto d-block" />
        </div>
      </div>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
