import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import environment from '../environments/env.dev'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: environment.FIREBASE_API_KEY,
    authDomain: "svelte-tutorial-70e10.firebaseapp.com",
    databaseURL: "https://svelte-tutorial-70e10.firebaseio.com",
    projectId: "svelte-tutorial-70e10",
    storageBucket: "svelte-tutorial-70e10.appspot.com",
    messagingSenderId: "145833354453",
    appId: "1:145833354453:web:4251e77abb9d05ef48ee5c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
