import {initializeApp} from "firebase/app";
import { getFirestore , doc, setDoc , updateDoc , getDocs  ,deleteDoc } from "firebase/firestore"
import {updateProfile, getAuth, signInWithEmailAndPassword, signOut , onAuthStateChanged, createUserWithEmailAndPassword , deleteUser } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4XG89kSdaFR4zt_PI98IlN0x4aoNOPRU",
    authDomain: "todoappbyreactjs.firebaseapp.com",
    databaseURL: "https://todoappbyreactjs-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todoappbyreactjs",
    storageBucket: "todoappbyreactjs.appspot.com",
    messagingSenderId: "1004213403262",
    appId: "1:1004213403262:web:ac8ab6d16b2fdc2f14e22f",
    measurementId: "G-050R3XJ93V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Authentication 
export const auth = getAuth();
export {onAuthStateChanged, signInWithEmailAndPassword , createUserWithEmailAndPassword, updateProfile,deleteUser }
export const signOutHandler =() => signOut(auth)


//FireStore 
export const db = getFirestore(app);
export { doc, setDoc , updateDoc , getDocs  , deleteDoc } 
