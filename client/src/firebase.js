import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLe-wh01HTeqbVmCkT_MHJ3vJjpgdwfqk",
  authDomain: "ecommerce-f263b.firebaseapp.com",
  projectId: "ecommerce-f263b",
  storageBucket: "ecommerce-f263b.appspot.com",
  messagingSenderId: "331546026716",
  appId: "1:331546026716:web:d4bdb157198f2449a2ca19",
  measurementId: "G-6HZXY21E5G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
