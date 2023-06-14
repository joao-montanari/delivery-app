import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: "AIzaSyDXT46T9lXebKxcQmyWzMZI0eUmF9mvU2I",
  authDomain: "aplic-delivery.firebaseapp.com",
  projectId: "aplic-delivery",
  storageBucket: "aplic-delivery.appspot.com",
  messagingSenderId: "744538141769",
  appId: "1:744538141769:web:ae5f1d96c638e297613b98",
  measurementId: "G-ZJ15TB5GTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export { auth };