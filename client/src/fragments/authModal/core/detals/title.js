import { memo } from "react"
import { SVGNames } from "@eachbase/constants"
import { Styled } from ".."
import { Icon } from "@eachbase/components"


export const Title = memo(
  ( {afterText, beforeText, logo, img} ) => {

    return (
      <Styled.TitleBlock>
        {afterText
          ? <p className="after">{afterText}</p>
          : null
        }

        {logo
          ? <Icon  name={SVGNames.Logo}/>
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

      </Styled.TitleBlock>
    )
  }
)