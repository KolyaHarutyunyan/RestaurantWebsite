import { useEffect, useState } from "react";
import { profileActions } from "@eachbase/store";
import { Header } from "./header";
import { Footer } from "./footer";
import { useDispatch } from "react-redux";
import { ProfileHeader } from "./profileHeader/profileHeader";
import { SideSheetsDrawer } from "./sideSheetsDrawer/sideSheetsDrawer";
import { StyledLayout } from "./style";
import { useRouter } from "next/router";
import { useWidth } from "@eachbase/utils";
import axios from "axios";
import { MODAL_NAMES } from "../../constants";
import { LazyLoad, useModal } from "../../components";

export const Layout = ({ children, privatePage = true }) => {
  const { open } = useModal();
  const dispatch = useDispatch()
  const router = useRouter();
  const showLayout = !["/preview", "/menu"].includes(router.pathname);
  const [showDashboard, setShowDashboard] = useState(false);
  const [loading, setLoading] = useState(false);
  const width = useWidth();
  const token = typeof window !== "undefined" && localStorage.getItem("token");

  // useEffect(() => {
  //   setToken(typeof window !== "undefined" && localStorage.getItem("token"));
  // }, [token]);
  //
  useEffect(() => {
    if (privatePage && token) {
      dispatch(profileActions.getUserInfo());
    }
  }, [token]);


  useEffect(() => {
    if (token) {
      axios.get(`/businesses/mybusiness`, { auth: true }).then((res) => {
          setShowDashboard(true);
          setLoading(true)
       }
      ).catch((err) => {
        setLoading(true)
        if (err?.data?.message === "business with this information was not found") {
            open(MODAL_NAMES.CREATE_RESTAURANT);
        }
      });
    }else{
      setLoading(true)
    }
  }, [token]);

  return (
    <LazyLoad loaded={loading} >
    <StyledLayout >
      {showDashboard ? (
        <>
          {showLayout && <ProfileHeader />}
          <div className="main">
            {showLayout && width > 767 && <SideSheetsDrawer />}
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
    </LazyLoad>
  );
};
