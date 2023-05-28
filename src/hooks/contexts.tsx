import { useContext } from "react";

import { GlobalContext } from "../contexts/GlobalContext";
import { FriendsContext } from "@/contexts/FriendsContext";

export function useGlobalContext(): any {
  return useContext(GlobalContext);
}

export function useFriendsContext(): any {
  return useContext(FriendsContext);
}
