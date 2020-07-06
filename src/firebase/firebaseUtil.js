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
export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const firestore = firebase.firestore();

export const createUserProfilerDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })

        } catch (error) {
            console.error('error creating user', error.message)
        }
    }

    return userRef;
}

export const convertCollectionsSnapshotToMap = collections => {
    const collectionsMap = {};

    collections.docs.forEach(doc => {
        const {title, items} = doc.data();

        collectionsMap[title.toLowerCase()] = {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            title,
            items
        }
    });

    return collectionsMap;
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}


export default firebase;