import React from 'react'

const Signup = () => {
    return (
        <div>
                      <div>
      <div className="container">
        <div className="row m-5">
          <div className="col-12 text-center">
         <h1>Register</h1>
            <hr />
          </div>
        </div>
        <div className="row">
  
          <div className="col-md-6 mb-3 rounded mx-auto d-block text-center">
          <form>

          <div className="mb-3 rounded mx-auto d-block text-center">
    <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
    <input type="text" placeholder="Vera Wang" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" />
   </div>
  <div className="mb-3 rounded mx-auto d-block text-center">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" placeholder="verawang@gmail.com" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" />
   </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>


  <button type="submit" className="btn btn-primary m-4">Register</button>
</form>
          </div>
        </div>
      </div>

    </div>
        </div>
    )
}

export default Signup
