import { memo, useContext } from 'react'
import { IconContext } from '@eachbase/context'
import { ArSVGNames } from "../../constants";
import PropTypes from 'prop-types';


export const Icon = memo(
  (props) => {
    console.log(props)
    const {SVGIcon} = useContext(IconContext)
    return <SVGIcon {...props}/>
  }
)
Icon.propTypes = {
  name: PropTypes.oneOf([
    "Email",
    "Back",
    "Logo",
    "GoogleColor",
    "FaceBook",
    "Twitter",
    "User",
    "DownArrow",
    "LogOut",
    "Profile",
    "Restaurant",
    "ToggleMenu",
    "EyeOn", "EyeOff", "Password", "DonePassword",
    "DoneRestaurant"])
}