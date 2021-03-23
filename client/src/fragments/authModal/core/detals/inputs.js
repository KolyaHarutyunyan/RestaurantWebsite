import { memo, useState } from "react"
import { Styled } from "..";
import { Icon } from "@eachbase/components";
import { SVGNames } from "@eachbase/constants";


const EF = () => {
}

export const Inputs = memo(
  ( {
      type,
      isDisabled,
      error,
      icon,
        brdType,
      blockTitle,
      important,
      brd,
      value,
      onChange,
      blockDescription,
      onFocus = EF,
      onBlur = EF,
      placeholder,
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
        {
          blockTitle
            ? <Styled.InputTitle>{blockTitle}</Styled.InputTitle>
            : <></>
        }


        <Styled.InputBlock brd={brd} h={type === "textarea" && 130} brdType={brdType}
                           className={( isDisabled ? " disabled" : "" ) + ( isFocused ? " focused" : "" ) + ( error ? " error" : "" )}>
          <div className={`content ${( important && !value.length ) ? "important" : ""}`}>
            {
              icon &&
              <Styled.InputBlockIcon>
                <Icon name={icon} color={error ? "#ff453A" : ""}/>
              </Styled.InputBlockIcon>
            }
            {
              type === "textarea"
                ? <Styled.TextArea
                  value={value}
                  onChange={e => onChange(e.target.value)}
                  onFocus={focus}
                  onBlur={blur}
                  placeholder={placeholder || ""}
                />
                :
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
            }

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
        {
          blockDescription
            ? <Styled.InputDescription>{blockDescription}</Styled.InputDescription>
            : <></>
        }
      </>
    )
  }
)