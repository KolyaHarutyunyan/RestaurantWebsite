import { Socials, Styled, Title, useAuthStyles } from ".."
import { SVGNames } from "@eachbase/constants"
import { check, change } from "@eachbase/utils"
import { Button } from "@material-ui/core"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actions } from '@eachbase/store'
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
    if ( !userData.email.value || !userData.password.value ) {
      check.email(setUserData)
      check.pass(setUserData)
    }
    if ( !userData.email.error && !userData.password.error ) {
      const user = {
        email: userData.email.value,
        password: userData.password.value
      };
      dispatch(actions.auth.sign.in({user}))
      clicked = !clicked
    }
  }
  const auth = useSelector(state=>state.auth)

  console.log("auht from sign in",auth)

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
          onChange={value => change.email(value, setUserData)}
          onBlur={() => check.email(setUserData)}
          placeholder="Email"
        />
        <Input.pass
          icon={SVGNames.Password}
          {...userData.password}
          onChange={value => change.pass(value, setUserData)}
          onBlur={() => check.pass(setUserData)}
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
