import { createContext } from "react"
import { IconProvider } from "./icons/IconProvider"
import { ModalProvider } from "./modal"


const Context = createContext()

export const ContextProvider = ( {children} ) =>
  <Context.Provider value={{}}>
    <IconProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </IconProvider>
  </Context.Provider>






