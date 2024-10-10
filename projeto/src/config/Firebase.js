// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj2m_HEMMw2uh_bUAatPfqq2qLAYzxHmE",
  authDomain: "teste-react-9f4fd.firebaseapp.com",
  projectId: "teste-react-9f4fd",
  storageBucket: "teste-react-9f4fd.appspot.com",
  messagingSenderId: "257906966406",
  appId: "1:257906966406:web:21ca6fc95ef916b3b7b607",
  measurementId: "G-ZDKJBT3VQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app, auth};