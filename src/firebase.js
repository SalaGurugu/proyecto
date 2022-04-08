import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkt3AmCaXbu0jEPoyhIj-WcXHlTnaxOHM",
  authDomain: "sala-61df8.firebaseapp.com",
  projectId: "sala-61df8",
  storageBucket: "sala-61df8.appspot.com",
  messagingSenderId: "86157962154",
  appId: "1:86157962154:web:341a5b22ce70022e69d9d3"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth();

export { db, auth, storage };
