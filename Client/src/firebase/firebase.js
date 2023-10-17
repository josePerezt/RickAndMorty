// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDe634_B406Nxc5jWyG0EFRae7yneLFHbo",
  authDomain: "rick-and-morty-c3831.firebaseapp.com",
  projectId: "rick-and-morty-c3831",
  storageBucket: "rick-and-morty-c3831.appspot.com",
  messagingSenderId: "1057739017570",
  appId: "1:1057739017570:web:f0f930e87cc562675d303b",
  measurementId: "G-PEX1BYD5V2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
