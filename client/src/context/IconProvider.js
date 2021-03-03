import { IconContext } from '.'
// import FacebookFill from '../../public/assets/icons/FI/facebookFill.svg'
import EmailOutline from '../../public/assets/icons/FI/emailOutline.svg';

export const IconsProvider = ( {children} ) => {
  const SVGNames = {
    facebookFill: "facebookFill",
    emailOutline:"emailOutline",
  }
  const SVGIcon = ( props ) =>
    SVGNames[ props.name]
      ? ( {
        // [ SVGNames.facebookFill ]: <FacebookFill { ...props } className={ `icon-facebookFill` } fill={ props.color }/>,
        [ SVGNames.emailOutline ]: <EmailOutline { ...props } className={ `icon-emailOutline` } fill={ props.color }/>,
      }[ props.name ] )
      : <></>

  return <IconContext.Provider value={{SVGIcon, SVGNames}}>{children}</IconContext.Provider>
}


