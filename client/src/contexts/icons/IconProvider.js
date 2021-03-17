import { createContext } from "react";

import Email from '../../../public/assets/icons/EmailIcon.svg'
import Logo from '../../../public/assets/icons/Logo.svg'
import GoogleColor from '../../../public/assets/icons/GoogleIcon.svg'
import FaceBook from '../../../public/assets/icons/FacebookIcon.svg'
import Twitter from '../../../public/assets/icons/TwitterIcon.svg'
import User from '../../../public/assets/icons/UserIcon.svg'
import DownArrow from '../../../public/assets/icons/DownArrowIcon.svg'
import LogOut from '../../../public/assets/icons/LogOutIcon.svg'
import Profile from '../../../public/assets/icons/ProfileIcon.svg'
import Restaurant from '../../../public/assets/icons/RestaurantIcon.svg'
import ToggleMenu from "../../../public/assets/icons/ToggleMenuIcon.svg"

import { SVGNames } from "@eachbase/constants"


export const IconContext = createContext()

export const IconProvider = ( {children} ) => {


  const SVGIcon = ( props ) =>
    SVGNames[ props.name]
      ? ( {
        [ SVGNames.email ]: <Email { ...props } className={ `icon-emailOutline` } fill={ props.color }/>,
        [ SVGNames.logo]: <Logo { ...props } className={ `icon-logo` } fill={ props.color }/>,
        [ SVGNames.googleColor]: <GoogleColor { ...props } className={ `icon-googleColor` } fill={ props.color }/>,
        [ SVGNames.facebook]: <FaceBook { ...props } className={ `icon-facebook` } fill={ props.color }/>,
        [ SVGNames.twitter]: <Twitter { ...props } className={ `icon-twitter` } fill={ props.color }/>,
        [ SVGNames.logo]: <Logo { ...props } className={ `icon-logo` } fill={ props.color }/>,
        [ SVGNames.user]: <User { ...props } className={ `icon-user` } fill={ props.color }/>,
        [ SVGNames.arrowDown]: <DownArrow { ...props } className={ `icon-arrowDown` } fill={ props.color }/>,
        [ SVGNames.logOut]: <LogOut { ...props } className={ `icon-logOut` } fill={ props.color }/>,
        [ SVGNames.profile]: <Profile { ...props } className={ `icon-profile` } fill={ props.color }/>,
        [ SVGNames.restaurant]: <Restaurant { ...props } className={ `icon-restaurant` } fill={ props.color }/>,
        [ SVGNames.toggleMenu]: <ToggleMenu { ...props } className={ `icon-toggleMenu` } fill={ props.color }/>,
      }[ props.name ] )
      : <></>

  return <IconContext.Provider value={{SVGIcon}}>{children}</IconContext.Provider>
}


