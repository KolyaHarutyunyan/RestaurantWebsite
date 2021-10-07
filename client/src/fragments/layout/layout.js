import {Fragment, useEffect, useState} from "react";
import { MainWrapper } from "@eachbase/theme";
import { profileActions } from "@eachbase/store";
import { Header } from "./header";
import { Footer } from "./footer";
import { useDispatch } from "react-redux";

export const Layout = ({ children, privatePage = true }) => {
  const dispatch = useDispatch();
  const token = typeof window !== 'undefined' && localStorage.getItem('token')

  useEffect(() => {
    if (privatePage && token) {
      dispatch(profileActions.getUserInfo());
    }
  }, []);

    return (
    <Fragment>

      <MainWrapper className="main-wrapper">
          <Header />
        <div className="page-content">{children}</div>

        <Footer />
      </MainWrapper>
    </Fragment>
  );
};
