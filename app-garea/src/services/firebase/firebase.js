
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnpZ0uWepIaANtbqiXDvJcZJLaVsM1iuI",
  authDomain: "app-react-604b3.firebaseapp.com",
  projectId: "app-react-604b3",
  storageBucket: "app-react-604b3.appspot.com",
  messagingSenderId: "746602327649",
  appId: "1:746602327649:web:2b3ac5524f215bc6194420",
  measurementId: "G-9YBTRX8LBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)