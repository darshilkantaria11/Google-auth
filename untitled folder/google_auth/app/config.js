// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALsZPjssFd972yJoxjxLcNT4cD78mhnaE",
  authDomain: "auth-ce312.firebaseapp.com",
  projectId: "auth-ce312",
  storageBucket: "auth-ce312.appspot.com",
  messagingSenderId: "537669455458",
  appId: "1:537669455458:web:9a287153df9351981b0b3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;