import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container my-5">
      <div className="row py-md-5 align-items-center flex-row-reverse">
        <div className="col-md-8">
          <img
            src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/01/about-us-page-examples-1-61fd8f9784626-sej-1520x800.jpg"
            // src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            // src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt=""
            width={"100%"}
          />
        </div>
        <div className="col-md-4 mt-5 mt-md-0">
          <h1 style={{ color: "#7a00ed" }}>About Us</h1>
          <p className="fs-5">
            Online Shopping BD has never been easier. TheBestLaptopdb is best
            online shopping store in Bangladesh.
          </p>
          <Link to="/about" className="btn btn-outline fs-5">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
