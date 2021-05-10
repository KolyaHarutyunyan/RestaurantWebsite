import { InputContainer } from "./style";

export const Input = ({
  icon = null,
  required = false,
  helper = "",
  error = false,
  containerClassName = "",
  ...rest
}) => {
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
          <input {...rest} />
        </div>
      </div>
      <div className="helper-container">{helper}</div>
    </InputContainer>
  );
};
