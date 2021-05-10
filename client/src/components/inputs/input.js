import { useCallback, useState } from "react";
import { InputContainer } from "./style";
import { Icons } from "@eachbase/theme";

export const Input = ({
  icon = null,
  required = false,
  helper = "",
  error = false,
  containerClassName = "",
  type = "text",
  ...rest
}) => {
  const [currentType, setCurrentType] = useState(type);

  const renderControllerEye = useCallback(() => {
    if (type === "password") {
      return (
        <button
          className="controller-eye"
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
          <input type={type === "password" ? currentType : type} {...rest} />
          {renderControllerEye()}
        </div>
      </div>
      <div className="helper-container">{helper}</div>
    </InputContainer>
  );
};
