// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCmNuvJyhKvff-85LsegaYY5z37VxUeYzU',
  authDomain: 'phone-store-8e7aa.firebaseapp.com',
  databaseURL: 'https://phone-store-8e7aa-default-rtdb.firebaseio.com',
  projectId: 'phone-store-8e7aa',
  storageBucket: 'phone-store-8e7aa.appspot.com',
  messagingSenderId: '826077894854',
  appId: '1:826077894854:web:4f4cce8ed1b7d5cfd9dfc7',
  measurementId: 'G-73SZFRB680',
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
// Initialize Firebase
export const db = app.firestore();
