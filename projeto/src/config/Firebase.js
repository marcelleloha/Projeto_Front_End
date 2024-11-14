// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// //import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDj2m_HEMMw2uh_bUAatPfqq2qLAYzxHmE",
//   authDomain: "teste-react-9f4fd.firebaseapp.com",
//   projectId: "teste-react-9f4fd",
//   storageBucket: "teste-react-9f4fd.appspot.com",
//   messagingSenderId: "257906966406",
//   appId: "1:257906966406:web:21ca6fc95ef916b3b7b607",
//   measurementId: "G-ZDKJBT3VQE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //const analytics = getAnalytics(app);
// const auth = getAuth(app)

// export {app, auth};


// src/config/Firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBOWvo8uv51lkv6MN4jpMCVPTNr5YDq8QA",
  authDomain: "projetofront-be270.firebaseapp.com",
  projectId: "projetofront-be270",
  storageBucket: "projetofront-be270.appspot.com",
  messagingSenderId: "413826187336",
  appId: "1:413826187336:web:1121ffa1eb0032dfb1d87d"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Obter a instância do Firestore
const db = getFirestore(app);

// Exportando o banco de dados
export { db };

