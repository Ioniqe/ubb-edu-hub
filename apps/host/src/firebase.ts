// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-Cjzd3R3OzPGY1jT_HczdFY8ZUQslHLE",
  authDomain: "ubb-edu-hub.firebaseapp.com",
  projectId: "ubb-edu-hub",
  storageBucket: "ubb-edu-hub.appspot.com",
  messagingSenderId: "204446372637",
  appId: "1:204446372637:web:f26404daba935957c547f4",
  measurementId: "G-4Z1L0P4YX3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const analytics = getAnalytics(app);
