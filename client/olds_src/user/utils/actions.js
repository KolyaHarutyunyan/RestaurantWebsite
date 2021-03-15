import initState from "./initState.json"

export const actions = (state, setState) =>({
  signOut:()=>setState(initState)

} )

