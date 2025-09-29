import { Children, createContext } from "react";


const CompleteWebContext = createContext()


export default CompleteWebContext;


const CompleteWebContextProvider = ({ Children }) => {


     return (
          <CompleteWebContext.Provider value={{}}>
               {Children}
          </CompleteWebContext.Provider>
     )
}