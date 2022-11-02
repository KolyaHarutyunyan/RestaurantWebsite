import { RadioContainer } from "./style";
import { v4 as uuid } from "uuid";
export const Radio = ({ label, ...rest }) => {
  const id = uuid();

  return (
    <RadioContainer>
      {label ? (
        <label htmlFor={id}>
          <input id={id} type="radio" {...rest} />
          <div className="radio-box" />
          {label}
        </label>
      ) : null}
    </RadioContainer>
  );
};
