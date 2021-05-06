import { CONSTANTS } from "@eachbase/constants";

export const socialData = (title) => ({
  title,
  icons: [
    {
      link: "/auth/google",
      icon: CONSTANTS.SVGNames.GoogleColor,
    },
    {
      link: "/auth/facebook",
      icon: CONSTANTS.SVGNames.FaceBook,
    },
    {
      link: "/auth/twitter",
      icon: CONSTANTS.SVGNames.Twitter,
    },
  ],
});

export const VerifyKeyLength = 6;
