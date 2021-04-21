import { createContext, useState } from "react";
import {Modal, AlertModal, AuthModal } from "@eachbase/fragments";

let initData = {status: false, props: {}}

let initState = {
  auth: initData,
  alert: initData,
  removeMenuItem:initData,
  removeCategory:initData,
  removeMenu:initData,
  removeAccount:initData,
}

export const ModalContext = createContext()

export const ModalProvider = ({children}) => {

  let [modal, setModal] = useState(initState)

  let close = (type) => setModal(current => ({...current, [type]: initData}))

  let open = (type, props) => setModal(current => ({...current, [type]: {status: true, ...props}}))

  let openModal = {
    auth: (props = {}) => open("auth", props),
    alert: (props = {}) => open("alert", props),
    removeMenuItem: (props = {}) => open("removeMenuItem", props),
    removeCategory: (props = {}) => open("removeCategory", props),
    removeMenu: (props = {}) => open("removeMenu", props),
    removeAccount: (props = {}) => open("removeAccount", props),
  }

  return (
    <ModalContext.Provider value={{openModal}}>

      <AuthModal {...modal.auth} close={()=>close( "auth")}/>
      <AlertModal {...modal.alert} close={()=>close( "alert")}/>
      
      <Modal.RemoveMenu {...modal.removeMenu} close={()=>close( "removeMenu")}/>
      <Modal.RemoveCategory {...modal.removeCategory} close={()=>close( "removeCategory")}/>
      <Modal.RemoveMenuItem {...modal.removeMenuItem} close={()=>close( "removeMenuItem")}/>
      <Modal.RemoveAccount {...modal.removeAccount} close={()=>close( "removeAccount")}/>

      {children}
    </ModalContext.Provider>
  )
}


