import {Icon} from "@eachbase/components"
import {SVGNames} from "@eachbase/constants"
import { Styled, Title, useAuthStyles } from "..";
import { Button } from "@material-ui/core";

export const Done = ({type,close}) =>{
  let classes = useAuthStyles()
  let data = {
    restaurant:{
      title: {
        logo: SVGNames.DoneRestaurant,
        beforeText: "Congrats you're all Set",
      },
      description:"Now you can create your first menu.Good Luck!",

    },
    password:{
      title: {
        logo: SVGNames.DonePassword,
        beforeText: "Password Reset",
      },
      description:"Your Password has been reset successfully",

    }
  }[type]

  return(
    <>
      <Title {...data.title}/>
      <Styled.Description>{data.description}</Styled.Description>
      <Button className={classes.submit} onClick={close}>Done</Button>
    </>
  )
}