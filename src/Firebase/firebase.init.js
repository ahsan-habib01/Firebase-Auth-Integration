// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBRQSVl8b0FaXw7O8_HMCNlVk3iwAfZQq4',
  authDomain: 'fir-auth-integration-5d351.firebaseapp.com',
  projectId: 'fir-auth-integration-5d351',
  storageBucket: 'fir-auth-integration-5d351.firebasestorage.app',
  messagingSenderId: '849313170093',
  appId: '1:849313170093:web:7d268feec2166e3b51fc24',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
