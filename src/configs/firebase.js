// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAHBSRqBKLfsqZbk1regCGHopq-NAzUU2s',
  authDomain: 'tamk-portfol.firebaseapp.com',
  projectId: 'tamk-portfol',
  storageBucket: 'tamk-portfol.appspot.com',
  messagingSenderId: '1003809086015',
  appId: '1:1003809086015:web:b2d01664de0767dc5e368a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
