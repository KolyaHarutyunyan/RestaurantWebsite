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
      <Hero />
      <div className="container">
        <DigitalMenu />
        <HowItWorks />

        <YourBusiness />
      </div>
      <QRCode />
      <MenusAndMenuItems />
    </Fragment>
  );
};
