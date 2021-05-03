import { Fragment } from "react";
import {
  DigitalMenu,
  Hero,
  MenusAndMenuItems,
  YourBusiness,
  QRCode,
  HowItWorks,
} from "../fragments/homePageSections";
import { STYLED } from "@eachbase/theme";
export const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <STYLED.Container>
        <YourBusiness />
      </STYLED.Container>
      <QRCode />
      <STYLED.Container>
        <HowItWorks />
        <DigitalMenu />
      </STYLED.Container>
      <MenusAndMenuItems />
    </Fragment>
  );
};
