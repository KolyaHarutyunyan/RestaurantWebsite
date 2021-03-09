import { memo } from "react"
import { LineButtonBlock } from "../styles/screens.style"

export const LineButton = memo(
  ({afterText, beforeText, activeText, action})=>
    <LineButtonBlock>
        {afterText}
        <button onClick={action}>{activeText}</button>
        {beforeText}
      </LineButtonBlock>

)