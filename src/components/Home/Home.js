import React from "react";
import { Link } from "react-router-dom";
import useReview from "../../hooks/useReview";
import HomeImg from "../../images/galaxy-book-pro.jpg";
import ReviewCart from "../ReviewCart/ReviewCart";
import "./Home.css";

const Home = () => {
  // custom style
  const color = { color: "#7a00ed" };
  // custom hooks for reviews
  const [reviews, setReview] = useReview();

  return (
    <div className="container">
      <div className="row align-items-center mt-5">
        <div className="col-md-6">
          <h1>Your next laptop</h1>
          <h1 style={color}>Your best laptop</h1>
          <p className="fs-4 text-justify mt-2 text-secondary">
            The best laptop of 2022 can come with a variety of brands, prices,
            and features. Here, we've given you the best laptops. Instant
            discounts up to ₹500 on your laptop and free delivery for students.
          </p>
          <Link to="/" className="btn btn-outline fs-5">
            Shop Now
          </Link>
        </div>
        <div className="col-md-6">
          <img src={HomeImg} alt="" className="img-fluid mx-auto d-block" />
        </div>
      </div>
      <div>
        <h2 className="text-center">Reviews</h2>
        {reviews.slice(0, 3).map((review) => (
          <ReviewCart key={review.id} review={review}></ReviewCart>
        ))}
        <Link
          to="/reviews"
          className="btn btn-outline mx-auto my-5 d-block review-all-btn fs-5"
        >
          See All Reviews
        </Link>
      </div>
    </div>
  );
};

export default Home;
