import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyAoM0o6H7RVHl2XiNPddAlzK7EOytapcx8",
    authDomain: "market-ed362.firebaseapp.com",
    databaseURL: "https://market-ed362.firebaseio.com",
    projectId: "market-ed362",
    storageBucket: "market-ed362.appspot.com",
    messagingSenderId: "708316515733",
    appId: "1:708316515733:web:538bf802ab96a1310fba9c",
    measurementId: "G-C480G0R9VX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;