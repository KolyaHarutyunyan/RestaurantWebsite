import { Styled } from "..";

export const Title = ({ afterText, beforeText, logo = "Logo" }) => {
  return (
    <Styled.TitleBlock>
      {afterText ? <p className="after">{afterText}</p> : null}
      icon
      {beforeText ? <p className="before">{beforeText}</p> : null}
    </Styled.TitleBlock>
  );
};
