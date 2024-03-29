import { useCallback, useState, forwardRef } from "react";
import { InputContainer } from "./style";
import { Icons } from "@eachbase/theme";

export const Input = forwardRef(
  (
    {
      icon = null,
      required = false,
      helper = "",
      error = false,
      containerClassName = "",
      type = "text",
      handleBlur,
      sendBoolean,
      validator,
      max,
      helperColo,
      border,
      padding,
      autoComplete,
      handleChange,
      ...rest
    },
    ref
  ) => {
    const [currentType, setCurrentType] = useState(type);
    const renderControllerEye = useCallback(() => {
      if (type === "password") {
        return (
          <button
            className="controller-eye"
            type="button"
            onClick={() =>
              setCurrentType(currentType === "text" ? "password" : "text")
            }
          >
            {currentType === "password" ? (
              <Icons.EyeIcon />
            ) : (
              <Icons.EyeOffIcon />
            )}
          </button>
        );
      }
      return null;
    }, [type, currentType]);

    return (
      <InputContainer
        icon={icon}
        error={error}
        required={required}
        className={containerClassName}
      >
        <div style={{ borderRadius: border, padding: padding }} className="main-container">
          <div className="icon-container">{icon}</div>
          <div className="input-container">
            {type === "no" ?
              <input
                name="foo"
                autoComplete="off"
                onChange={handleChange}
                maxLength={max}
                ref={ref}
                type={"text"}
                {...rest}
              />
              :
              <input
                onChange={handleChange}
                autoComplete="new-password"
                maxLength={max}
                ref={ref}
                type={type === "password" ? currentType : type}
                {...rest}
              />
            }
            {renderControllerEye()}
          </div>
        </div>
        <div style={{ color: helperColo ? helperColo : helperColo === "gray" ? "#BFBFBF" : "#FF453A" }}
             className="helper-container">{helper}</div>
      </InputContainer>
    );
  }
);
