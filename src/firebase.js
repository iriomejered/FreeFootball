// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA45Je_tXOUlGShBA9Ka_DZ-2MMQ82XsmA",
  authDomain: "fir-and-react-6d92a.firebaseapp.com",
  databaseURL: "https://freefootball-82d2a-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "fir-and-react-6d92a",
  storageBucket: "fir-and-react-6d92a.firebasestorage.app",
  messagingSenderId: "78362680430",
  appId: "1:78362680430:web:67a3156263d19279c49a7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database};