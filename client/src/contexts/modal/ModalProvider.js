import { createContext, useState } from "react";
import { AuthModal } from "@eachbase/fragments";

let initState = {
  auth:false,
  avatar:{
    status:false,
    props:{}
  }
}

export const ModalContext = createContext()

export const ModalProvider = ( {children} ) => {

  let [modal,setModal] = useState(initState)


  let close = {
    auth :()=>setModal(current=>({...current,auth:false})),
    avatar: ()=>setModal(current=>({...current,avatar:{status:false,props:{}}}))

  }

  let open = {
    auth :()=>setModal(current=>({...current,auth:true})),
    avatar: props=>setModal(current=>({...current,avatar:{status:true,props}}))
  }

  return (
    <ModalContext.Provider value={{openModal:open}}>

      <AuthModal status={modal.auth} close={close.auth}/>
      {/*<Avatar {...modal.avatar} close={close.avatar}/>*/}
      {children}
    </ModalContext.Provider>
  )
}


