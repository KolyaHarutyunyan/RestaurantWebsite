import { memo } from "react"
import { Title } from "../detals/title";
import { Description, SubmitButton } from "../styles/screens.style";

export const GetRestaurant = memo(
  ({creatRestaurant})=>{
    return (
      <>
        <Title afterText="Last Step to Sign Up"/>
        <Description >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</Description>
        <SubmitButton onClick={creatRestaurant}  >Done</SubmitButton>
      </>
    )
  }
)