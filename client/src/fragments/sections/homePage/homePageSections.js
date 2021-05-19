import { Fragment } from "react";

import { DigitalMenu } from "./digitalMenu";
import { Hero } from "./hero";
import { HowItWorks } from "./howItWorks";
import { MenusAndMenuItems } from "./menusAndMenuItems";
import { QRCode } from "./qrCode";
import { YourBusiness } from "./yourBusiness";

export const HomePageSections = () => {
  return (
    <Fragment>
      <DigitalMenu />
      <Hero />
      <HowItWorks />
      <MenusAndMenuItems />
      <QRCode />
      <YourBusiness />
    </Fragment>
  );
};
