import { createContext } from "react"
import { IconProvider } from "./icons"
import { ModalProvider } from "./modal"


export const Context = createContext()

export const ContextProvider = ( {children} ) =>
  <Context.Provider value={{}}>
    <IconProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </IconProvider>
  </Context.Provider>






