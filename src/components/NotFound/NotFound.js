import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../../images/404-Icon.png";

const NotFound = () => {
  return (
    <div className="container">
      <img
        src={NotFoundImg}
        alt=""
        style={{ maxWidth: "300px" }}
        className="mx-auto d-block mt-5 mb-3"
      />
      <h3 className="mb-2">Something went wrong!</h3>
      <p className="text-center fs-4 mb-1">404 page not found..</p>
      <Link
        to="/"
        className="text-decoration-none mx-auto d-block fs-5 mb-5"
        style={{ width: "101px" }}
      >
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
