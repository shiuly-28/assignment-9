
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAib5f4cTUQxxpmok-tC6NMXGYkdC7gsYs",
  authDomain: "assignment-9-c71f8.firebaseapp.com",
  projectId: "assignment-9-c71f8",
  storageBucket: "assignment-9-c71f8.firebasestorage.app",
  messagingSenderId: "859931162756",
  appId: "1:859931162756:web:4c0feb2588629575836ad1",
  measurementId: "G-TDNSQ8EZQQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
