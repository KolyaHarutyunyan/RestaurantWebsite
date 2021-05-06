import { memo } from "react";
import { CONSTANTS } from "@eachbase/constants";
import { Styled } from "..";
import { Icon } from "@eachbase/components";

export const Title = memo(
  ({ afterText, beforeText, logo = CONSTANTS.SVGNames.Logo }) => {
    return (
      <Styled.TitleBlock>
        {afterText ? <p className="after">{afterText}</p> : null}

        <Icon name={logo} />

        {beforeText ? <p className="before">{beforeText}</p> : null}
      </Styled.TitleBlock>
    );
  }
);
