import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEjXWrBEPuDNW71yKeZza_T5DOGC_FxP0",
  authDomain: "discordclone-ab50c.firebaseapp.com",
  projectId: "discordclone-ab50c",
  storageBucket: "discordclone-ab50c.firebasestorage.app",
  messagingSenderId: "121442796727",
  appId: "1:121442796727:web:b3215dd10ec25f4ff53932",
  measurementId: "G-BBJFH868JF"
};

// Initialize Firebase

// Initialize Firebase


// Initialize Firebase services
// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };
export default app;