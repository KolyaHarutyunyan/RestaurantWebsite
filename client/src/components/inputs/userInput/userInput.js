import React from "react";
import { StyledUserInput } from "./style";

export const UserInput = ({
  inputClassName,
  required,
  inputLabel,
  inputType,
  inputName,
  inputValue = "",
  onInputChange,
  inputPlaceholder,
  inputError,
  charCounterIsShown,
  charLimit = "50",
  isTextArea,
}) => {
  return (
    <StyledUserInput>
      <label className="user-input-label">
        <p className={`input-label ${required ? "required" : ""}`}>
          {inputLabel}
        </p>
        {isTextArea ? (
          <>
            <textarea
              className={`${inputError ? "error" : ""}`}
              name={inputName}
              value={inputValue}
              onChange={onInputChange}
              placeholder={inputPlaceholder}
            />
            {charCounterIsShown && (
              <p className="user-input-char-counter">{`Max ${charLimit} characters`}</p>
            )}
          </>
        ) : (
          <>
            <input
              type={inputType ? inputType : "text"}
              className={`${inputError ? "error" : ""} ${inputClassName}`}
              name={inputName}
              value={inputValue}
              onChange={onInputChange}
              onWheel={(evt) => inputType === "number" && evt.target.blur()}
              autoComplete="off"
              placeholder={inputPlaceholder}
            />
            <p className="user-input-error-text">{inputError}</p>
          </>
        )}
      </label>
    </StyledUserInput>
  );
};
