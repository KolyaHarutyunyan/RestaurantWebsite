import { forwardRef } from "react";
import { StyledUserInput } from "./style";

export const UserInput = forwardRef((props, ref) => {
  const {
    inputClassName,
    required,
    inputLabel,
    inputType,
    inputName,
    inputValue,
    onInputChange,
    inputPlaceholder,
    inputDisabled,
    inputError,
    charCounterIsShown,
    charLimit = "50",
    isTextArea,
    inputFromOutside,
  } = props;

  return (
    <StyledUserInput className={inputClassName}>
      <label className="user-input-label">
        <p className={`input-label ${required ? "required" : ""}`}>
          {inputLabel}
        </p>
        {isTextArea ? (
          <>
            <textarea
              ref={ref}
              className={`${inputError ? "error" : ""}`}
              name={inputName}
              value={inputValue || ""}
              onChange={onInputChange}
              placeholder={inputPlaceholder}
              disabled={inputDisabled}
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
                value={inputValue || ""}
                onChange={onInputChange}
                onWheel={(evt) => inputType === "number" && evt.target.blur()}
                autoComplete="off"
                placeholder={inputPlaceholder}
                disabled={inputDisabled}
              />
            )}
            <p className="user-input-error-text">{inputError}</p>
          </>
        )}
      </label>
    </StyledUserInput>
  );
});
