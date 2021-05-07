import { Styled, socialData } from "..";

export const Socials = ({ type }) => {
  let socials = socialData(`${type} with your social media account`);

  return (
    <Styled.SocialBlock>
      <p>{socials.title}</p>
      <div className="icons">
        {socials.icons.map((item, i) => (
          <a key={i} href={item.link}>
            icon
          </a>
        ))}
      </div>
    </Styled.SocialBlock>
  );
};
