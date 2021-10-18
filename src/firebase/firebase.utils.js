import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const config= {
    apiKey: "AIzaSyCvrfIqXt80IEv0wpzKGAzZ8cxHjPckWbw",
    authDomain: "react-ecom-a08a3.firebaseapp.com",
    projectId: "react-ecom-a08a3",
    storageBucket: "react-ecom-a08a3.appspot.com",
    messagingSenderId: "1014906259232",
    appId: "1:1014906259232:web:2997374872248e87b77945",
    measurementId: "G-2GET6EKMH8"
  }
firebase.initializeApp(config);
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth= firebase.auth();
export const firestore = firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInwithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;