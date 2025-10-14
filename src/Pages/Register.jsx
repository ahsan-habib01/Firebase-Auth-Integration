import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
// import { auth } from './../Firebase/firebase.init';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {

  const { createUser } = use(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then(result => {
      console.log(result.user);
      })
      .catch(error => {
      console.log(error);
    })
  };

  // const handleRegister = e => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   // console.log(email, password);

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then(result => {
  //       console.log(result.user);
  //     })
  //     .catch(error => {
  //     console.log(error);
  //   })
  // };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            <h1 className="text-3xl font-bold">Please Register!</h1>

            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
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
          Already have an account? Please{' '}
          <Link className="text-blue-400 hover:text-blue-700" to="/login">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
