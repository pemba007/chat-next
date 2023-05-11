import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyC6rHNJwyE05LhdY0mOhVLk2SZ2FuZ20xQ",
  authDomain: "chat-python-next-app.firebaseapp.com",
  projectId: "chat-python-next-app",
  storageBucket: "chat-python-next-app.appspot.com",
  messagingSenderId: "223854365188",
  appId: "1:223854365188:web:2140ade93416b90e208351",
};

console.log("fuirebase", firebaseConfig);

export const firebaseApp = initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//    firebase.initializeApp({});
// }else {
//    firebase.app(); // if already initialized, use that one
// }
export const auth = getAuth(firebaseApp);

// export default firebaseApp;
