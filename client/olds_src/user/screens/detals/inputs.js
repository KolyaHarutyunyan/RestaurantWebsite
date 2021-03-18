import { memo, useState } from "react"
import { ErrorMessage, Input, InputBlock, InputBlockIcon } from "../styles/screens.style";
import { Icon } from "@eachbase/components";
import { SVGNames } from "@eachbase/constants";


export const Inputs = ( {
                          type, isDisabled, error, icon, value, onChange = () => {
  }, onFocus = () => {
  }, onBlur = () => {
  }, placeholder,
                        } ) => {
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
      <InputBlock
        className={( isDisabled ? " disabled" : "" ) + ( isFocused ? " focused" : "" ) + ( error ? " error" : "" )}>
        <div className="content">
          {
            icon &&
            <InputBlockIcon>
              <Icon name={icon} color={error ? "#ff453A" : ""}/>
            </InputBlockIcon>
          }
          <Input
            type={type !== "password" || !isVisible ? type : "text"}
            // value={value}
            // onChange={e => onChange(e.target.value)}
            onFocus={focus}
            onBlur={blur}
            placeholder={placeholder || ""}
            w={type === "password" ? 52 : undefined}

          />
          {
            type === "password" &&
            <InputBlockIcon style={{cursor: "pointer"}} onClick={() => setIsVisible(!isVisible)}>
              <Icon name={isVisible ? SVGNames.email : ""}/>
            </InputBlockIcon>
          }


        </div>

      </InputBlock>
      {
        error
          ? <ErrorMessage>
            {error}
          </ErrorMessage>
          : null
      }
    </>
  )
}
