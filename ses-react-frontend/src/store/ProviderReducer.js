import Context from "./Context";
import reducer, { initState } from "./Reducers";
import logger from "./Logger";
import { useReducer } from "react";
function StoreProvider({ children }) {
  const [state, dispath] = useReducer(logger(reducer), initState);

  return (
    <>
      <Context.Provider value={[state, dispath]}>{children}</Context.Provider>
    </>
  );
}
export default StoreProvider;
