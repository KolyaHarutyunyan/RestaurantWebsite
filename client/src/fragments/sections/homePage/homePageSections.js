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
import { Payments } from "../payments/payments";

export const HomePageSections = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  return (
    <LazyLoad loaded={loaded}>
      <Container>
        <Hero/>
        <YourBusiness />
        <QRCode />
        <HowItWorks />
        <DigitalMenu />

         <Payments/>

        <MenusAndMenuItems />
      </Container>
    </LazyLoad>
  );
}
