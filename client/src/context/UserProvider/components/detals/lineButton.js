import { memo } from "react";
import { LineButtonBlock } from "./formBuilder/styles/style";

export const LineButton = memo(
  ({afterText, beforeText, activeText, action})=>{
    return(
      <LineButtonBlock>

        {afterText}
        <button onClick={action}>{activeText}</button>
        {beforeText}
      </LineButtonBlock>
    )
  }
)