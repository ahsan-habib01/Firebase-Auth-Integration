import { AuthContext } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';
import { useEffect, useState } from 'react';

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // get current user info
  useEffect(() => {
    // set the observer
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('current user in auth state change', currentUser);
      setUser(currentUser)
    });
    // clear the observer on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    createUser,
    signInUser,
  };

  return (
    <div>
      <AuthContext value={authInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
