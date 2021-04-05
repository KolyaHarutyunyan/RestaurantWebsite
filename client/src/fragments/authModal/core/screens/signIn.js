import { Socials, Styled, Title, useAuthStyles } from ".."
import { SVGNames } from "@eachbase/constants"
import { Check, Change } from "@eachbase/utils"
import { Button } from "@material-ui/core"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { authActions } from '@eachbase/store'
import { Input } from "@eachbase/components"

let clicked = false

export const SignIn = ({open, close}) => {


  let classes = useAuthStyles()

  let [userData, setUserData] = useState({
    email: {value: "", error: null},
    password: {value: "", error: null}
  })

  /** Connecting to the store */
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault()
    console.log("submit")
    if(!Check.form(setUserData)){return 0}


      const user = {
        email: userData.email.value,
        password: userData.password.value
      };
      dispatch(authActions.signIn({user}))
      clicked = !clicked

  }
  const auth = useSelector(state=>state.auth)

  console.log("auth from sign in",auth)

  useEffect(()=>{
    if(auth.isAuthenticated) {
      console.log("closing")
      close()
    }
  },[auth.isAuthenticated])


  return (

    <>
      <Title afterText="Welcome to Menuz"/>
      <Styled.FormBlock onSubmit={e => handleSubmit(e)}>
        <Input.email
          icon={SVGNames.Email}
          {...userData.email}
          onChange={value => Change.email(value, setUserData)}
          onBlur={() => Check.email(setUserData)}
          placeholder="Email"
        />
        <Input.pass
          icon={SVGNames.Password}
          {...userData.password}
          onChange={value => Change.text(value,"password", setUserData)}
          onBlur={() => Check.pass(setUserData)}
          placeholder="Password"
        />
        {
          auth.error && <Styled.Description red>{auth.error}</Styled.Description>
        }
        <Button className={classes.submit} onClick={e => handleSubmit(e)} onSubmit={e => handleSubmit(e)}>
          Continue
        </Button>
      </Styled.FormBlock>

      <Button className={classes.lineBtn + " dark mt16"} onClick={open.GetEmail}> Forgot Password? </Button>

      <Styled.Or><p>OR</p></Styled.Or>
      <Socials type={"Sign in"}/>
      <Button className={classes.lineBtn} onClick={open.SignUp}> Doesn't have an account? Sign Up</Button>
    </>
  )
}
