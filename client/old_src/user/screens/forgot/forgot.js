import { memo, useState } from "react"
import { Box } from "@material-ui/core"
import { DoneReset } from "./doneReset"
import { GetEmail } from "./getEmail";
import { Verify } from "./verify";
import { ResetPassword } from "./resetPassword";

export const Forgot = memo(
  ( {className, changePosition} ) => {

    let [status, setStatus] = useState(0)

    let getEmail = () => {
      console.log("email")
      setStatus(1)
    }
    let verifyCode = () => {
      console.log("verify")
      setStatus(2)
    }
    let changePass = () => {
      console.log("verify")
      setStatus(3)
    }
    return (
      <Box className={className}>

        {
          status === 0 && <GetEmail submit={getEmail}/>
        }
        {
          status === 1 && <Verify verify={verifyCode} email={"test@test.com"}/>
        }
        {
          status === 2 && <ResetPassword changePass={changePass}/>
        }
        {
          status === 3 && <DoneReset done={() => changePosition(0)}/>
        }
      </Box>
    )
  }
)