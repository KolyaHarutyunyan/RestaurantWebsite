import { memo } from "react";
import { SVGNames } from "@eachbase/constants";
import { Styled } from "..";
import { Icon } from "@eachbase/components";

export const Title = memo(({ afterText, beforeText, logo = SVGNames.Logo }) => {
  return (
    <Styled.TitleBlock>
      {afterText ? <p className="after">{afterText}</p> : null}

      <Icon name={logo} />

      {beforeText ? <p className="before">{beforeText}</p> : null}
    </Styled.TitleBlock>
  );
});
