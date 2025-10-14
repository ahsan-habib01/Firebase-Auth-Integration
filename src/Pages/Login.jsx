import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form>
          <fieldset className="fieldset">
            <h1 className="text-3xl font-bold">Please login!</h1>

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p>
          New to our website? 
          <Link className="text-blue-400 hover:text-blue-700 ml-2" to="/register">
            Register
          </Link> now
        </p>
      </div>
    </div>
  );
};

export default Login;