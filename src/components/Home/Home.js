import React from "react";
import { Link } from "react-router-dom";
import useReview from "../../hooks/useReview";
import HomeImg from "../../images/galaxy-book-pro.jpg";
import ReviewCart from "../ReviewCart/ReviewCart";
import Reviews from "../Reviews/Reviews";
import "./Home.css";

const Home = () => {
  const color = { color: "#2600ff" };

  const [reviews, setReview] = useReview();

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
          <Link to="/Home" className="btn btn-outline-primary fs-5">
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
          className="btn btn-outline-primary mx-auto my-5 d-block review-all-btn fs-5"
        >
          Reviews all
        </Link>
      </div>
    </div>
  );
};

export default Home;
