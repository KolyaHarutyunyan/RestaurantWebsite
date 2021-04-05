import { useState } from "react"
import { Icon, Input, Button, PageTitle } from "@eachbase/components"
import { SVGNames } from "@eachbase/constants"
import { Change, Check, InputTypes, CheckForm } from "@eachbase/utils"
import { Styled } from "./core"

let dataType = {
  newPass: "newPass",
  confirmPass: "confirmPass"
}
export const ResetPassword = ({resetToken}) => {

  let [userData, setUserData] = useState({
    [dataType.newPass]: {...InputTypes.password, dataType: dataType.newPass},
    [dataType.confirmPass]: {...InputTypes.password, dataType: dataType.confirmPass},
  })

  let handlerSubmit = () => {
    if ( !CheckForm(setUserData) ) {
      console.log("rewrite your data")
      return 0
    }
    if ( userData[dataType.newPass].value !== userData[dataType.confirmPass].value ) {
      setUserData({
        ...userData,
        [dataType.confirmPass]: {
          ...userData[dataType.confirmPass],
          error: "passwords is not matched"
        },
        [dataType.newPass]: {
          ...userData[dataType.newPass],
          error: "      "
        }
      })
    }


    console.log({
      ...userData,
      resetToken
    })
  }
  console.log(userData);
  return (
    <Styled.Content>
      <Icon name={SVGNames.Logo}/>
      <PageTitle>Reset Password</PageTitle>
      <Styled.Block>
        <Styled.BlockDescription>
          Enter your new password.<br/> Use at least 8 characters, 1 upper case and 1 digit.
        </Styled.BlockDescription>


        <Input
          icon={SVGNames.Password}
          {...userData[dataType.newPass]}
          setState={setUserData}
          placeholder={"New Password"}
        />

        <Input
          icon={SVGNames.Password}
          {...userData[dataType.confirmPass]}
          setState={setUserData}
          placeholder={"Confirm New Password"}
        />

        <Button.Accept onClick={handlerSubmit}>Sign In</Button.Accept>
      </Styled.Block>
    </Styled.Content>
  )
}