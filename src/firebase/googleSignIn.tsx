import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "./firebaseSetup";
const provider = new GoogleAuthProvider();

export function googleSignIn() {
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        console.log("Google Sign in signInWithPopUp", user);

        resolve({
          currentUser: user,
          token: token,
        });
      })
      .catch((error) => {
        console.log("Error occurred in google login", error.message);
        reject(error);
      });
  });
}
