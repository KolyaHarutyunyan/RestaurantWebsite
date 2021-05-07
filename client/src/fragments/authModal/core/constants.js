import { CONSTANTS } from "@eachbase/constants";

export const socialData = (title) => ({
  title,
  icons: [
    {
      link: "/auth/google",
    },
    {
      link: "/auth/facebook",
    },
    {
      link: "/auth/twitter",
    },
  ],
});

export const VerifyKeyLength = 6;
