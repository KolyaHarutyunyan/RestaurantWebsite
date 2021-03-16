import { createContext } from "react";
import { IconProvider } from "./icons/IconProvider";



export const Context = createContext()

export const ContextProvider = ( {children} ) =>
  <Context.Provider   value={{}}>

    <IconProvider>
      {children}
    </IconProvider>

  </Context.Provider>



