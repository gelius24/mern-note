import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDog8RJJ6zKOpSIpv9GQpb3-2pEJljaYWw",
  authDomain: "noteapp-fd474.firebaseapp.com",
  projectId: "noteapp-fd474",
  storageBucket: "noteapp-fd474.appspot.com",
  messagingSenderId: "346252958591",
  appId: "1:346252958591:web:7fe01c62afab857526584a"
};

export const app = initializeApp(firebaseConfig);