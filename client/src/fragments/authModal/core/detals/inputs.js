import { memo, useState } from "react"
import { Styled } from "..";
import { Icon } from "@eachbase/components";
import { SVGNames } from "@eachbase/constants";


const EF = () => {
}

export const Inputs = memo(
  ( {
      type, isDisabled, error, icon, value, onChange, onFocus = EF, onBlur = EF, placeholder,
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
        <Styled.InputBlock
          className={( isDisabled ? " disabled" : "" ) + ( isFocused ? " focused" : "" ) + ( error ? " error" : "" )}>
          <div className="content">
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
              ?<Styled.InputBlockIcon style={{cursor: "pointer"}} onClick={() => setIsVisible(!isVisible)}>
                {
                  isVisible
                    ? <Icon name={SVGNames.EyeOff}/>
                    : <Icon name={SVGNames.EyeOn}/>
                }

              </Styled.InputBlockIcon>
                :null
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