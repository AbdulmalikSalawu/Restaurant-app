import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB8HALnlZNPnap-i3chAvugRzpoKin1dVk",
    authDomain: "food-order-91659.firebaseapp.com",
    databaseURL: "https://food-order-91659-default-rtdb.firebaseio.com",
    projectId: "food-order-91659",
    storageBucket: "food-order-91659.appspot.com",
    messagingSenderId: "869069150024",
    appId: "1:869069150024:web:19a040912bebdd9f84057d",
    measurementId: "G-VCZQP7D4RJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getDatabase(app)
export const myStorage = getStorage(app);