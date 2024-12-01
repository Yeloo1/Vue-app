import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';  // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAu_KmiHAYaWHNoJaohHn23cbK9CeMSLfw",
  authDomain: "transport-cost-calculato-1294b.firebaseapp.com",
  databaseURL: "https://transport-cost-calculato-1294b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "transport-cost-calculato-1294b",
  storageBucket: "transport-cost-calculato-1294b.firebasestorage.app",
  messagingSenderId: "535681241490",
  appId: "1:535681241490:web:a922e43df26059ae00714b",
  measurementId: "G-FTB6940S28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);  // Export Firestore

// Initialize Authentication
export const auth = getAuth(app);  // Export Auth
