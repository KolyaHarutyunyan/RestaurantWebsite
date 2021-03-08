
import { useState,createContext } from "react"
import { Auth } from "./components"
import initState from "./utils/initState.json"
import { actions } from "./utils";




export const UserContext = createContext()

export const UserProvider = ( {children} ) => {
  const [user, setUser] = useState(initState)
  const [isOpenAuth, setIsOpenAuth] = useState(false)

  console.log("user is: ",user)
  return (
    <UserContext.Provider value={{
      user,
      ...actions(user, setUser),
      openAuth: () => setIsOpenAuth(true),
    }}>

      <Auth active={isOpenAuth} close={() => setIsOpenAuth(false)}/>

      {children}
    </UserContext.Provider>
  )
}


