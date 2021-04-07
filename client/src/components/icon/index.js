import {useContext} from 'react'
import {IconContext} from '../../context'

const Icon = (props) => {
  const {SVGIcon} = useContext(IconContext)

  return <SVGIcon {...props} />
}
export default Icon
