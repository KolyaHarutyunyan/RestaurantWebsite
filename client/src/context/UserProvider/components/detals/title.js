import { memo } from "react";
import Icon from "../../../../components/icon";
import { SVGNames } from "../../../constants/svgNames";
import { TitleBlock } from "./formBuilder/styles/style";

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