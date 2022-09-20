import { useEffect } from "react";
import { profileActions } from "@eachbase/store";
import { Header } from "./header";
import { Footer } from "./footer";
import { useDispatch } from "react-redux";
import { ProfileHeader } from "./profileHeader/profileHeader";
import { SideSheetsDrawer } from "./sideSheetsDrawer/sideSheetsDrawer";

export const Layout = ({ children, privatePage = true }) => {
  const dispatch = useDispatch();
  const token = typeof window !== "undefined" && localStorage.getItem("token");

  useEffect(() => {
    if (privatePage && token) {
      dispatch(profileActions.getUserInfo());
    }
  }, []);

  return (
    <div className="main-wrapper">
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
    </div>
  );
};
