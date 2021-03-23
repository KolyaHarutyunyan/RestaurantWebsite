import  { memo, useContext } from 'react'
import { IconContext } from '@eachbase/context'


export const Icon = memo(
  // ( {name, width, height, color} ) => {
  //   const {SVGIcon} = useContext(IconContext)

    // return <SVGIcon name={name} width={width} height={height} color={color}/>
  // }
  ( props ) => {
    const {SVGIcon} = useContext(IconContext)
    return <SVGIcon {...props}/>
  }

)
