import { memo, useState } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";
import { GetEmail } from "./detals/getEmail";
import { VerifyCode } from "./detals/verifyCode";
import { ResetPassword } from "./detals/resetPassword";
import { DoneReset } from "./detals/DoneReset";

export const Forgot = memo(
  ( {pos, changePosition} ) => {
    let classes = useStyles()
    let [status,setStatus] = useState(0)

    let getEmail=()=>{
      console.log("email")
      setStatus(1)
    }
    let verifyCode =()=>{
      console.log("verify")
      setStatus(2)
    }
    let changePass = ()=>{
      console.log("verify")
      setStatus(3)
    }
    return (
      <Box className={classes.authBox+(pos!==0?" disabled":" active")}>

        {
          status === 0 && <GetEmail submit={getEmail}/>
        }
        {
          status === 1 && <VerifyCode verify={verifyCode} email={"test@test.com"}/>
        }  {
          status === 2 && <ResetPassword changePass={changePass} />
        } {
          status === 3 && <DoneReset done={()=>changePosition(0)}  />
        }
      </Box>
    )
  }
)