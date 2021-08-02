import { LazyLoad } from "@eachbase/components";
import { DigitalMenu } from "./digitalMenu";
import { Hero } from "./hero";
import { HowItWorks } from "./howItWorks";
import { MenusAndMenuItems } from "./menusAndMenuItems";
import { QRCode } from "./qrCode";
import { YourBusiness } from "./yourBusiness";
import { Container } from "./style";
import { useState } from "react";
import { useEffect } from "react";

export const HomePageSections = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <LazyLoad loaded={loaded}>
      <Container>
        <Hero/>
        <YourBusiness />
        <QRCode />
        <HowItWorks />

        <DigitalMenu />


        <MenusAndMenuItems />
      </Container>
    </LazyLoad>
  );
};
