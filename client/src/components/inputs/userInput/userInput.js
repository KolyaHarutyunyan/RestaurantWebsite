import { forwardRef } from "react";
import { StyledUserInput } from "./style";

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
    ...rest
  } = props;

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
              <input
                ref={ref}
                type={inputType ? inputType : "text"}
                className={`${inputError ? "error" : ""}`}
                name={inputName}
                onWheel={(evt) => inputType === "number" && evt.target.blur()}
                autoComplete="off"
                placeholder={inputPlaceholder}
                disabled={inputDisabled}
                {...rest}
              />
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
