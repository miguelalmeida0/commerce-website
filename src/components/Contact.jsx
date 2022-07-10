import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row m-5">
          <div className="col-12 text-center">
            <div
              className="display-6 fw-bolder 
    text-center"
            >
              <h1>Have Some Questions?</h1>
              <form
                action="https://getform.io/f/b5a394c3-08aa-4c6d-b697-8cab5c48b450"
                method="POST"
              ></form>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-md 5">
              <img
                src="/assets/contact.jpg"
                alt=""
                className="rounded mx-auto d-block"
                width="950px"
                height="600px"
              />
            </div>
            <div className="col-md-6 mb-3 rounded mx-auto d-block text-center m-5">
              <form>
                <div className="mb-3 rounded mx-auto d-block text-center">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="email"
                    className="form-control col-md-6 mb-3 rounded mx-auto d-block text-center"
                    id="exampleInputEmail1"
                    placeholder="Virgil Abloh"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3 rounded mx-auto d-block text-center">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control text-center"
                    placeholder="virgilabloh@gmail.com"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Message
                  </label>
                  <textarea
                    type="text"
                    className="form-control text-center"
                    id="exampleInputPassword1"
                  />
                </div>

                <button type="submit" className="btn btn-primary m-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
