import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCeqigsRLfJ1-FMnzmur_uadwKYMK0_biE",
    authDomain: "dashboard-1fdca.firebaseapp.com",
    projectId: "dashboard-1fdca",
    storageBucket: "dashboard-1fdca.appspot.com",
    messagingSenderId: "927673104847",
    appId: "1:927673104847:web:aaa74bbfd56d4c6b237aba"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

export default auth