import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPTeKTtIh2mGHtFDiWB8HLQim6eFHAoqg",
  authDomain: "weather-app-d0794.firebaseapp.com",
  projectId: "weather-app-d0794",
  storageBucket: "weather-app-d0794.appspot.com",
  messagingSenderId: "775922748854",
  appId: "1:775922748854:web:9bfb560850f66cce2f0517",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
