import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="container m-5">
        <div className="row">
          <div className="col-12">
            <h1>About Us</h1>
            <p className="lead">
              While building and re-designing my portfolio I've thought about
              keeping my React skills fresh, so this was a super cool project to
              begin. I'm a big fashion fan and loved the idea of creating an
              e-commerce website! This website is dedicated to Virgil Abloh, an
              icon.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary mb-lg-0">
              Contact Us{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
