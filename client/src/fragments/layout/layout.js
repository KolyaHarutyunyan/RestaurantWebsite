import { useEffect } from "react";
import { profileActions } from "@eachbase/store";
import { Header } from "./header";
import { Footer } from "./footer";
import { useDispatch } from "react-redux";
import { ProfileHeader } from "./profileHeader/profileHeader";
import { SideSheetsDrawer } from "./sideSheetsDrawer/sideSheetsDrawer";
import { StyledLayout } from "./style";

export const Layout = ({ children, privatePage = true }) => {
  const dispatch = useDispatch();
  const token = typeof window !== "undefined" && localStorage.getItem("token");

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
            <SideSheetsDrawer>{children}</SideSheetsDrawer>
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
