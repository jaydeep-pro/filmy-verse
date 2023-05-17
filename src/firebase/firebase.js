import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBc1iGrIjPGvcC0q5KAxnBondgsdZjpL8A",
    authDomain: "filmyverse-dfdde.firebaseapp.com",
    projectId: "filmyverse-dfdde",
    storageBucket: "filmyverse-dfdde.appspot.com",
    messagingSenderId: "729928711275",
    appId: "1:729928711275:web:13b7ffb64b1032b253852e",
    measurementId: "G-XT8WYWZYW8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;