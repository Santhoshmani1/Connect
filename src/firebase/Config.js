// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyC7GiqMTZlziGTDiEJdrEkX99kfiFVPaGo",
  authDomain: "connect-server-9434e.firebaseapp.com",
  projectId: "connect-server-9434e",
  storageBucket: "connect-server-9434e.appspot.com",
  messagingSenderId: "578456279974",
  appId: "1:578456279974:web:da2a1eab537d803ef84d67",
  measurementId: "G-0LFK62XLWK"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
