import { forwardRef, useState } from "react";
import { StyledUserInput } from "./style";
import { Images } from "@eachbase/theme/images";

export const UserInput = forwardRef((props, ref) => {
  const {
    inputClassName,
    required,
    inputLabel,
    inputType,
    inputName,
    inputPlaceholder,
    inputDisabled,
    inputError,
    charCounterIsShown,
    charLimit = "50",
    isTextArea,
    inputFromOutside,
    inputIcon,
    isForPassword,
    height,
    ...rest

  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const type = isForPassword
    ? showPassword
      ? "text"
      : "password"
    : inputType
    ? inputType
    : "text";

  return (
    <StyledUserInput className={inputClassName}>
      <label className="user-input-label">
        {inputLabel && (
          <p className={`input-label ${required ? "required" : ""}`}>
            {inputLabel}
          </p>
        )}
        {isTextArea ? (
          <>
            <textarea
              style={height ? {height: height} : {}}
              ref={ref}
              className={`${inputError ? "error" : ""}`}
              name={inputName}
              placeholder={inputPlaceholder}
              disabled={inputDisabled}
              {...rest}
            />
            {charCounterIsShown && (
              <p className="user-input-char-counter">{`Max ${charLimit} characters`}</p>
            )}
          </>
        ) : (
          <>
            {inputFromOutside || (
              <div className="input-box">
                {inputIcon && <div className="input-icon">{inputIcon}</div>}
                <input
                  ref={ref}
                  type={type}
                  className={`${inputError ? "error" : ""}`}
                  name={inputName}
                  onWheel={(evt) => inputType === "number" && evt.target.blur()}
                  autoComplete="off"
                  placeholder={inputPlaceholder}
                  disabled={inputDisabled}
                  {...rest}
                />
                {isForPassword && (
                  <div
                    className="vision-icon"
                    onClick={() => setShowPassword((pS) => !pS)}
                  >
                    {showPassword ? <Images.ClosedEye /> : <Images.OpenEye />}
                  </div>
                )}
              </div>
            )}
            {charCounterIsShown && (
              <div>
                <p className="user-input-char-counter">{`Max ${charLimit} characters`}</p>
              </div>
            )}

            {inputError && (
              <p className="user-input-error-text">{inputError}</p>
            )}
          </>
        )}
      </label>
    </StyledUserInput>
  );
});
