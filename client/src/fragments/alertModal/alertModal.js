import { Box, Button, Dialog, IconButton } from "@material-ui/core"
import { Input } from "@eachbase/components"
import { SVGNames } from "@eachbase/constants"
import CloseIcon from "@material-ui/icons/Close"
import { useAlertStyles,Styled } from "./core"
import { useState } from "react"
import { Change, Check } from "@eachbase/utils"


export const AlertModal = ({status, submit, close}) => {
  let classes = useAlertStyles()
  let [userData,setUserData] = useState({password: {value: "", error: ""}})

  return (


    <Dialog
      className={classes.dialog}
      open={status}
      onClose={close}
    >

      <IconButton
        aria-label="close"
        className={classes.closeIcon}
        onClick={close}>
        <CloseIcon/>
      </IconButton>

      <Box className={classes.box}>
        <Styled.Title>Delete Account</Styled.Title>
        <Styled.Description one>Are you sure you want to delete your account? If you delete your account, you'll permanently lose your profile. </Styled.Description>
        <Styled.Description > To delete your account, please enter your password </Styled.Description>
        <Input.pass
          {...userData.password}
          icon={SVGNames.Password}
          onChange={value=>Change.text(value,"password",setUserData)}
          onBlur={()=>Check.pass(setUserData)}
        />
        <Styled.Actions>
          <Button className={classes.submit } onClick={()=>submit(password.value)}>Delate</Button>
          <Button className={classes.cancel } onClick={close}>Cancel</Button>
        </Styled.Actions>

      </Box>
    </Dialog>
  )
}