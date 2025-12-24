// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEmYFz8D3HqTAWMD8z6RiN9KTzZ9WPEHU",
  authDomain: "gii-spatial-frb01.firebaseapp.com",
  databaseURL:
    "https://gii-spatial-frb01-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gii-spatial-frb01",
  storageBucket: "gii-spatial-frb01.firebasestorage.app",
  messagingSenderId: "176975388360",
  appId: "1:176975388360:web:31ca8225bc6213e3150ffd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
