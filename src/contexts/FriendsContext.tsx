import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

interface IFriendsContextProps {
  currentFriends: any;
  setCurrentFriends: (user: any) => void;
}

export const FriendsContext = React.createContext<IFriendsContextProps>({
  currentFriends: [],
  setCurrentFriends: () => {},
});

export const FriendsContextProvider = (props: any): any => {
  const [currentFriends, setCurrentFriends] = useState([]);

  return (
    <FriendsContext.Provider
      value={{
        currentFriends: currentFriends,
        setCurrentFriends: setCurrentFriends,
      }}
    >
      {props.children}
    </FriendsContext.Provider>
  );
};
