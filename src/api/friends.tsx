import { auth } from "@/firebase/firebaseSetup";

const getUserFriends = () => {
  // API call to access friends of current User
  const user = auth.currentUser;
  if (user !== null) {
    //   Access backend for user friends
  }
};

export { getUserFriends };
