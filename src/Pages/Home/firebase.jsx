// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtYDBbMyiYYMtc7-FPqXlFBgeBNJ3yRIU",
  authDomain: "abhinavportfoliovisitcounter.firebaseapp.com",
  projectId: "abhinavportfoliovisitcounter",
  storageBucket: "abhinavportfoliovisitcounter.firebasestorage.app",
  messagingSenderId: "564014614405",
  appId: "1:564014614405:web:b9e30ce499854646e3e6ec",
  measurementId: "G-JS9NWJXE7X"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);