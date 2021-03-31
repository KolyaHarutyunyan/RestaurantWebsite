import { memo, useContext } from 'react'
import { IconContext } from '@eachbase/context'

import PropTypes from 'prop-types';


export const Icon = memo(
  (props) => {

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
    "DoneRestaurant"]),
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}