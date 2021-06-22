import { forwardRef } from "react";
import { TextareaContainer } from "./style";

export const Textarea = forwardRef(
  (
    {
      icon = null,
      required = false,
      helper = "",
      error = false,
      containerClassName = "",
      ...rest
    },
    ref
  ) => {
    return (
      <TextareaContainer
        icon={icon}
        error={error}
        required={required}
        className={containerClassName}
      >
        <div className="main-container">
          <div className="icon-container">{icon}</div>
          <div className="input-container">
            <textarea ref={ref} {...rest} />
          </div>
        </div>
        <div className="helper-container">{helper}</div>
      </TextareaContainer>
    );
  }
);
