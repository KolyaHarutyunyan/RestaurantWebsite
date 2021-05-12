import { Fragment, useEffect } from "react";
import { MainWrapper } from "@eachbase/theme";
import { profileActions } from "@eachbase/store";
import { Header } from "./header";
import { Footer } from "./footer";
import { useDispatch } from "react-redux";

export const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(profileActions.getUserInfo());
    }
  }, []);

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
