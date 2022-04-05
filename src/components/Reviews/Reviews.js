import React from "react";
import useReview from "../../hooks/useReview";
import ReviewCart from "../ReviewCart/ReviewCart";

const Reviews = () => {
  // custom hooks for reviews
  const [reviews, setReview] = useReview();
  return (
    <div className="mb-5">
      <h2 className="text-center my-4">Reviews({reviews.length})</h2>
      <div className="row flex-wrap">
        {reviews.map((review) => (
          <ReviewCart key={review.id} review={review}></ReviewCart>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
