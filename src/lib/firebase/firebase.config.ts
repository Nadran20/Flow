import { initializeApp, FirebaseApp, FirebaseOptions } from "firebase/app";
import {Firestore, getFirestore} from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_MESSAGE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_MEASUREMENT_ID
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);

export { db };