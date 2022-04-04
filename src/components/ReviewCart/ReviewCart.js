import React from "react";

const ReviewCart = (props) => {
  const { name, Rating, Profile, comment } = props.review;
  return (
    <div className="col-12 mt-4">
      <div className="card container rounded-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <img
              src={Profile}
              alt=""
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
            <h5 className="card-title ms-3 m-0" style={{ cursor: "pointer" }}>
              {name}
            </h5>
          </div>
          <div className="ms-5">
            <p className="card-text ms-2 text-secondary mb-2">{comment}</p>
            <h6 className="d-flex align-items-center ms-2 mb-2">
              Rating: {Rating} star.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
