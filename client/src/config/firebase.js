// import { initializeApp } from "firebase/app";
// import AsyncStorage from "@react-native-async-storage/async-storage"
// import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";

// const auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(AsyncStorage)
// })

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from "@env"

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };