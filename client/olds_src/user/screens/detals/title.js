import { memo } from "react"
import { SVGNames } from "../../../context/constants/svgNames"
import { TitleBlock } from "../styles/screens.style"
import Icon from "../../../view/components/icon"


export const Title = memo(
  ( {afterText, beforeText, logo, img} ) => {
    return (
      <TitleBlock>
        {afterText
          ? <p className="after">{afterText}</p>
          : null
        }

        {logo
          ? <Icon  name={SVGNames.logo}/>
          : null
        }
        {img
          ? <img src={img}/>
          : null
        }
        {beforeText
          ? <p className="before">{beforeText}</p>
          : null
        }

      </TitleBlock>
    )
  }
)