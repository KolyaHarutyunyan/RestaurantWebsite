import { Styled } from ".";
import { colors } from "@eachbase/theme";

export const InputBlock = ({
  children,
  brd,
  className = "",
  important,
  inType,
  icon,
  type,
  eye,
  error,
  toggleEye,
}) => {
  return (
    <Styled.Block
      className={className}
      brd={brd}
      hasIcon={!!icon}
      inType={inType}
    >
      <div className={`content ${important && "important"}`}>
        {icon && "Icon"}

        {children}

        {type === "password" ? "Icon" : null}
      </div>
      {error ? <p className="error">{error}</p> : null}
    </Styled.Block>
  );
};
