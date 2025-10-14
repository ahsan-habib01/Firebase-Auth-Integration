import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';

const Login = () => {
  const { signInUser } = use(AuthContext);

  const handleLogIn = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogIn}>
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
          <Link
            className="text-blue-400 hover:text-blue-700 ml-2"
            to="/register"
          >
            Register
          </Link>{' '}
          now
        </p>
      </div>
    </div>
  );
};

export default Login;
