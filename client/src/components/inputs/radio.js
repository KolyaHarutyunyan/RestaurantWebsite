import { RadioContainer } from "./style";
import { v4 as uuid } from "uuid";
export const Radio = ({ label, ...rest }) => {
  const id = uuid();

  return (
    <RadioContainer>
      <input id={id} type="radio" {...rest} />
      {label ? <label htmlFor={id}>{label}</label> : null}
    </RadioContainer>
  );
};
