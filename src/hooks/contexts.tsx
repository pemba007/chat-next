import { useContext } from "react";

import { GlobalContext } from "../contexts/GlobalContext";

export function useGlobalContext(): any {
  return useContext(GlobalContext);
}
