import { memo, useState } from "react"
import {   Styled } from "./index"
import { Icon } from "@eachbase/components"
import { SVGNames } from "@eachbase/constants"
import { Check,Change } from "@eachbase/utils"

const EF = () => {
}
export const TextInput =   memo(
  ({
     type,
     isDisabled,
     error,
     setState,
     icon,
     brdType,
     blockTitle,
     important,
     brd,
     mt,
     mtt,
     value,
     onChange=false,dataType,
     readOnly = false ,
     onFocus = EF,
     onBlur = EF,
     placeholder,
     className=""
   }) => {
    let [isVisible, setIsVisible] = useState(false)
    let [isFocused, setIsFocused] = useState(false)

    const focus = () => {
      setIsFocused(true)
      onFocus()
    }
    const change = value =>{
      if(onChange)onChange(value)
      else Change(setState,dataType,value)
    }
    const blur = () => {
      setIsFocused(false)
      Check(setState,dataType)
      onBlur()
    }
    return (
      <>
        {
          blockTitle
            ? <Styled.InputTitle mtt={mtt}>{blockTitle}</Styled.InputTitle>
            : <></>
        }


        <Styled.InputBlock mt={mt} brd={brd} h={type === "textarea" && 130} brdType={brdType}
                           className={className+(isDisabled ? " disabled" : "") + (isFocused ? " focused" : "") + (error ? " error" : "")}>
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
                  onChange={e => !readOnly && change(e.target.value)}
                  onFocus={focus}
                  onBlur={blur}
                  placeholder={placeholder || ""}
                  w={type === "password" ? 52 : undefined}
                  autocomplete={type === "email"}
                  readonly={readOnly}
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