import { createContext } from "react"
import { IconProvider } from "./icons/IconProvider"
import { ModalProvider } from "./modal"
import { useDispatch } from "react-redux";
import { authActions } from "../store";


const Context = createContext()

export const ContextProvider = ( {children} ) => {
  const dispatch = useDispatch();
  dispatch(authActions.checkIsAuth())


  return(
  <Context.Provider value={{}}>
    <IconProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </IconProvider>
  </Context.Provider>
)
}




