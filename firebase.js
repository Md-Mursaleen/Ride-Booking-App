import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQVg1gT9npw5rhILAHVNaVU_gtU_L7LjI",
    authDomain: "uber-clone-cfac5.firebaseapp.com",
    projectId: "uber-clone-cfac5",
    storageBucket: "uber-clone-cfac5.appspot.com",
    messagingSenderId: "384229130723",
    appId: "1:384229130723:web:0093f5d308ce164a6660d6",
    measurementId: "G-H3EWJREGDY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
export default firebase;
