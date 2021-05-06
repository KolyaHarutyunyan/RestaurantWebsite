import { memo } from "react";
import { Styled, socialData } from "..";
import { Icon } from "@eachbase/components";

export const Socials = memo(({ type }) => {
  let socials = socialData(`${type} with your social media account`);

  return (
    <Styled.SocialBlock>
      <p>{socials.title}</p>
      <div className="icons">
        {socials.icons.map((item, i) => (
          <a key={i} href={item.link}>
            <Icon name={item.icon} />
          </a>
        ))}
      </div>
    </Styled.SocialBlock>
  );
});
