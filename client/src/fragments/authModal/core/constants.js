import { SVGNames } from "@eachbase/constants";

export const socialData = (title) => ({
  title,
  icons: [
    {
      link: "/auth/google",
      icon: SVGNames.GoogleColor,
    },
    {
      link: "/auth/facebook",
      icon: SVGNames.FaceBook,
    },
    {
      link: "/auth/twitter",
      icon: SVGNames.Twitter,
    },
  ],
});

export const VerifyKeyLength = 6;
