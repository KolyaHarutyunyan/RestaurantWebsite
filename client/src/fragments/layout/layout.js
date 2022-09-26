import { useEffect, useState } from "react";
import { profileActions } from "@eachbase/store";
import { Header } from "./header";
import { Footer } from "./footer";
import { useDispatch } from "react-redux";
import { ProfileHeader } from "./profileHeader/profileHeader";
import { SideSheetsDrawer } from "./sideSheetsDrawer/sideSheetsDrawer";
import { StyledLayout } from "./style";

export const Layout = ({ children, privatePage = true }) => {
  const dispatch = useDispatch();
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(typeof window !== "undefined" && localStorage.getItem("token"));
  }, [token]);

  useEffect(() => {
    if (privatePage && token) {
      dispatch(profileActions.getUserInfo());
    }
  }, []);

  return (
    <StyledLayout>
      {token ? (
        <>
          <ProfileHeader />
          <div className="main">
            <SideSheetsDrawer />
            <div className="main-content">{children}</div>
          </div>
        </>
      ) : (
        <>
          <Header />
          <div className="page-content">{children}</div>
          <Footer />
        </>
      )}
    </StyledLayout>
  );
};
