import { createContext, useState } from "react";
import { AuthModal } from "@eachbase/fragments";

let initState = {
  auth:false,

}

export const ModalContext = createContext()

export const ModalProvider = ( {children} ) => {

  let [modal,setModal] = useState(initState)


  let close = {
    auth :()=>setModal(current=>({...current,auth:false})),

  }

  let open = {
    auth :()=>setModal(current=>({...current,auth:true})),

  }

  return (
    <ModalContext.Provider value={{openModal:open}}>

      <AuthModal status={modal.auth} close={close.auth}/>

      {children}
    </ModalContext.Provider>
  )
}


