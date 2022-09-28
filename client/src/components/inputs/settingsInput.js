import { StyledSettingsInput } from "./style";

export const SettingsInput = ({
  inputType,
  inputClassName,
  inputIcon,
  inputValue,
  onChangeInput,
  inputDisabled,
  inputRequired,
  ...restProps
}) => {
  return (
    <StyledSettingsInput className={inputClassName}>
      {inputIcon}
      <input
        type={inputType || "text"}
        value={inputValue}
        onChange={onChangeInput}
        disabled={inputDisabled}
        required={inputRequired}
        {...restProps}
      />
    </StyledSettingsInput>
  );
};
