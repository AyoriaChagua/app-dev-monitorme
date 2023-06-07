import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCTr1CJnlkXdOwbcqoO_Wm7JZhN8nJuGJQ",
  authDomain: "monitorme-auth-d8caa.firebaseapp.com",
  projectId: "monitorme-auth-d8caa",
  storageBucket: "monitorme-auth-d8caa.appspot.com",
  messagingSenderId: "784821229054",
  appId: "1:784821229054:web:4f8ca6ea4302ee0d02dcaf",
  measurementId: "G-ZYZ2PXTVS3"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 

const analytics = getAnalytics(app);