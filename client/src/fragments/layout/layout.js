import { useEffect, useState } from "react";
import { profileActions } from "@eachbase/store";
import { Header } from "./header";
import { Footer } from "./footer";
import { useDispatch } from "react-redux";
import { ProfileHeader } from "./profileHeader/profileHeader";
import { SideSheetsDrawer } from "./sideSheetsDrawer/sideSheetsDrawer";
import { StyledLayout } from "./style";
import { useRouter } from "next/router";

export const Layout = ({ children, privatePage = true }) => {
  const dispatch = useDispatch();

  const router = useRouter();
  const showLayout = !["/preview", "/menu"].includes(router.pathname);

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
          {showLayout && <ProfileHeader />}
          <div className="main">
            {showLayout && <SideSheetsDrawer />}
            <div className={`main-content ${showLayout ? "shown" : ""}`}>
              {children}
            </div>
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
