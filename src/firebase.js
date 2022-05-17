import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBvlbWuqhZnKiuHjHLwjpFs3WT8W6quGLc",

    authDomain: "react-native-a0092.firebaseapp.com",
  
    projectId: "react-native-a0092",
  
    storageBucket: "react-native-a0092.appspot.com",
  
    messagingSenderId: "148185820101",
  
    appId: "1:148185820101:web:a749c22fa4c34d6ab179ac",
  
    measurementId: "G-SNZMXJYNGN"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);
