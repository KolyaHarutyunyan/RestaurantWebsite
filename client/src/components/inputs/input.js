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
        <div className="main-container">
          <div className="icon-container">{icon}</div>
          <div className="input-container">
            <input
              ref={ref}
              type={type === "password" ? currentType : type}
              {...rest}
            />
            {renderControllerEye()}
          </div>
        </div>
        <div className="helper-container">{helper}</div>
      </InputContainer>
    );
  }
);
