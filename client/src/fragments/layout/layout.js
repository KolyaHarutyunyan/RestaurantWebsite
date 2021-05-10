import { Fragment } from "react";
import { MainWrapper } from "@eachbase/theme";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <MainWrapper>
        {children}
        <Footer />
      </MainWrapper>
    </Fragment>
  );
};
