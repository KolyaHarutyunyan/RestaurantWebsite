import { SVGNames } from "../../context/constants/svgNames";


export const socialData= title =>({
  title,
  icons:[
    {
      "link": "/auth/google",
      "icon": SVGNames.googleColor
    },
    {
      "link": "/auth/facebook",
      "icon":SVGNames.facebook
    },
    {
      "link": "/auth/twitter",
      "icon": SVGNames.twitter
    },
  ]
} )