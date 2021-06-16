import { Fragment } from "react";

import { DigitalMenu } from "./digitalMenu";
import { Hero } from "./hero";
import { HowItWorks } from "./howItWorks";
import { MenusAndMenuItems } from "./menusAndMenuItems";
import { QRCode } from "./qrCode";
import { YourBusiness } from "./yourBusiness";

import { Container } from "./style";

export const HomePageSections = () => {
  return (
    <Container>
      <Hero />
      <YourBusiness />
      <DigitalMenu />
      <HowItWorks />
      <QRCode />
      <MenusAndMenuItems />
    </Container>
  );
};
