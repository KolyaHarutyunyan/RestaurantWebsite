import { Plans } from "./styles";
import { Payments } from "../fragments";
import { Typography } from "../components";
import {Icons} from "@eachbase/theme";

export const PlansAndPrices = ( ) => {
  return(
    <Plans>
      <div style={{marginBottom:0}} className='breadcrumb'>
        <a href="/restaurant">Restaurant</a>
        <Icons.Arrow/>
        <Typography className='bred-menu' color='text'>Menu</Typography>
      </div>
      <Payments type={'plans'}/>
    </Plans>
  )
}