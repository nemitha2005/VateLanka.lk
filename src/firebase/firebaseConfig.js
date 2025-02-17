import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let db = null;

export const initializeFirebase = async () => {
  try {
    const response = await fetch(
      "https://vatelanka-backend.vercel.app/api/config/firebase"
    );
    const firebaseConfig = await response.json();
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    return db;
  } catch (error) {
    console.error("Error initializing Firebase:", error);
    throw new Error("Failed to initialize Firebase");
  }
};

export const getDb = () => db;
