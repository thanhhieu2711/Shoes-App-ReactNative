/* eslint-disable no-unused-vars */

// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDfTr-kZsIFwG_k6Wpp2pck40KXNNO-2AQ',
  authDomain: 'nikestore-45fea.firebaseapp.com',
  projectId: 'nikestore-45fea',
  storageBucket: 'nikestore-45fea.appspot.com',
  messagingSenderId: '743141475902',
  appId: '1:743141475902:web:f146b233e45b60b9f3736f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }
export const auth = getAuth(app);

export default app;
