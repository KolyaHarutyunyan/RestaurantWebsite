import { Fragment } from "react";
import {
  DigitalMenu,
  Hero,
  MenusAndMenuItems,
  YourBusiness,
  QRCode,
  HowItWorks,
} from "../fragments/homePageSections";
export const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <div className="container">
        <YourBusiness />
      </div>
      <QRCode />
      <div className="container">
        <HowItWorks />
        <DigitalMenu />
      </div>
      <MenusAndMenuItems />
    </Fragment>
  );
};
