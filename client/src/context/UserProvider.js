import { UserContext } from '.'
import { useState } from "react"

let initState = {
  // id: "fdsgsadg",
  // fullName: "adgasdgsd",
  // email: "asgdas@gfdf.sdfad",
  id: "",
  fullName: "",
  email: "",
  // accessToken:"",
}

export const UserProvider = ( {children} ) => {
  let [user, setUser] = useState(initState)

  const signOut = () => setUser({
    id: "",
    fullName: "",
    email: "",
  })

  return (
    <UserContext.Provider value={{
      user,
      signOut
    }}>
      {children}
    </UserContext.Provider>
  )
}


