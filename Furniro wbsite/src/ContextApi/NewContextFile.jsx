import { createContext } from "react";

const SahilContext = createContext()
export default SahilContext

const SahilContextProvider = ({ children }) => {


     return (
          <SahilContext.Provider value={{}} children={children} />
     )
}