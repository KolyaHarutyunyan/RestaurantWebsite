import { Styled } from "."
import { useState } from "react";
import { Input } from "@eachbase/components"
import { SVGNames } from "@eachbase/constants"
import { Change, Check } from "@eachbase/utils"

export const EditPassword = () => {
  let [readOnly, setReadOnly] = useState(true)

  let [passwords, setPasswords] = useState({
    current: {value: "", error: ""},
    NewPass: {value: "", error: ""},
    conformPass: {value: "", error: ""},
  })

  let handlerClick = () => {
    // if ( readOnly ) {
    setReadOnly(!readOnly)
    // }
  }

  return (
    <Styled.Block>
      <Styled.SaveBtn onClick={handlerClick}> {readOnly ? "edit" : "save"}</Styled.SaveBtn>
      <Styled.BlockTitle>Change Password</Styled.BlockTitle>
      <Styled.BlockDescription>Use strong password to keep your account secure.</Styled.BlockDescription>

      <Styled.BlockForm open={!readOnly}>
        
        {/*<Input.pass*/}
        {/*  icon={SVGNames.Password}*/}
        {/*  {...passwords.current}*/}
        {/*  onChange={value => Change.text(value,"current", setPasswords)}*/}
        {/*  onBlur={() => Check.password(setPasswords,"current")}*/}
        {/*  placeholder="Password"*/}
        {/*  blockTitle={"Use at least 8 characters, 1 upper case and 1 digit"}*/}
        {/*  brd={8}*/}
        {/*  mt={24}*/}
        {/*  mtt={32}*/}
        {/*/>*/}
        {/*<Input.pass*/}
        {/*  icon={SVGNames.Password}*/}
        {/*  {...passwords.current}*/}
        {/*  onChange={value => change.pass(value, setPasswords)}*/}
        {/*  onBlur={() => check.pass(setPasswords)}*/}
        {/*  placeholder="Password"*/}
        {/*  brd={8}*/}
        {/*/>*/}
        {/*<Input.pass*/}
        {/*  icon={SVGNames.Password}*/}
        {/*  {...passwords.current}*/}
        {/*  onChange={value => change.pass(value, setPasswords)}*/}
        {/*  onBlur={() => check.pass(setPasswords)}*/}
        {/*  placeholder="Password"*/}
        {/*  brd={8}*/}
        {/*/>*/}
      </Styled.BlockForm>

    </Styled.Block>
  )
}