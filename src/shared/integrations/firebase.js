import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getEnvVar } from "../utils/import.meta.js";

const firebaseConfig = getEnvVar("VITE_FIREBASE_CONFIG");
const config = JSON.parse(firebaseConfig);

// Initialize Firebase & Firestore
const app = initializeApp(config);
export const db = getFirestore(app);
export const storage = getStorage(app);
