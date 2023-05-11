import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "./firebaseSetup";
const provider = new GoogleAuthProvider();

export const googleSignIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      console.log("Userdata", user);
      return {
        user: user,
        token: token,
      };
    })
    .catch((error) => {
      // Handle Errors here.
      console.log("Error occurred in google login", error.message);
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   // The email of the user's account used.
      //   const email = error.customData.email;
      //   // The AuthCredential type that was used.
      //   const credential = GoogleAuthProvider.credentialFromError(error);
      //   // ...
      return null;
    });
};
