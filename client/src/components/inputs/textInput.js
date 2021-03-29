import { memo, useState } from "react"
import { Styled } from "./index"
import { Icon } from "@eachbase/components"
import { SVGNames } from "@eachbase/constants"

const EF = () => {
}
export const TextInput =   memo(
  ({
     type,
     isDisabled,
     error,
     icon,
     brdType,
     important,
     brd,
     value,
     onChange,
     onFocus = EF,
     onBlur = EF,
     placeholder,
   }) => {
    let [isVisible, setIsVisible] = useState(false)
    let [isFocused, setIsFocused] = useState(false)

    const focus = () => {
      setIsFocused(true)
      onFocus()
    }
    const blur = () => {
      setIsFocused(false)
      onBlur()
    }
    return (
      <>
        <Styled.InputBlock brd={brd} h={type === "textarea" && 130} brdType={brdType}
                           className={(isDisabled ? " disabled" : "") + (isFocused ? " focused" : "") + (error ? " error" : "")}>
          <div className={`content ${(important && !value.length) ? "important" : ""}`}>
            {
              icon &&
              <Styled.InputBlockIcon>
                <Icon name={icon} color={error ? "#ff453A" : ""}/>
              </Styled.InputBlockIcon>
            }
                <Styled.Input
                  type={type !== "password" || !isVisible ? type : "text"}
                  value={value}
                  onChange={e => onChange(e.target.value)}
                  onFocus={focus}
                  onBlur={blur}
                  placeholder={placeholder || ""}
                  w={type === "password" ? 52 : undefined}
                  autocomplete={type === "email"}
                />
            {
              type === "password"
                ? <Styled.InputBlockIcon style={{cursor: "pointer"}} onClick={() => setIsVisible(!isVisible)}>
                  {
                    isVisible
                      ? <Icon name={SVGNames.EyeOff}/>
                      : <Icon name={SVGNames.EyeOn}/>
                  }
                </Styled.InputBlockIcon>
                : null
            }
          </div>
        </Styled.InputBlock>
        {
          error
            ? <Styled.ErrorMessage>
              {error}
            </Styled.ErrorMessage>
            : null
        }
      </>
    )
  }
)