import { createContext, useState } from "react";
import { AlertModal, AuthModal } from "@eachbase/fragments";
import { RemoveMenuItem } from "../../modals/removeMenuItem";

let initData = {status: false, props: {}}

let initState = {
  auth: initData,
  alert: initData,
  rmMenuItem:initData,
}

export const ModalContext = createContext()

export const ModalProvider = ({children}) => {

  let [modal, setModal] = useState(initState)

  let close = (type) => setModal(current => ({...current, [type]: initData}))

  let open = (type, props) => setModal(current => ({...current, [type]: {status: true, ...props}}))

  let openModal = {
    auth: (props = {}) => open("auth", props),
    alert: (props = {}) => open("alert", props),
    rmMenuItem: (props = {}) => open("rmMenuItem", props),
  }

  return (
    <ModalContext.Provider value={{openModal}}>

      <AuthModal {...modal.auth} close={()=>close( "auth")}/>
      <AlertModal {...modal.alert} close={()=>close( "alert")}/>
      <RemoveMenuItem {...modal.rmMenuItem} close={()=>close( "rmMenuItem")}/>

      {children}
    </ModalContext.Provider>
  )
}


