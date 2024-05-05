
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABxJyaRk8nTUjgGy5ZwMpWsVoCxK3VR_I",
  authDomain: "dataverse-c3a65.firebaseapp.com",
  projectId: "dataverse-c3a65",
  storageBucket: "dataverse-c3a65.appspot.com",
  messagingSenderId: "480998112847",
  appId: "1:480998112847:web:76d0f1db5499c58928f43a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDB = getStorage(app);