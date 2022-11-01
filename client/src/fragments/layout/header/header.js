import { useSelector } from "react-redux";
import { Container, NavigationContainer } from "./style";
import { Typography, Button, Menu, useModal } from "@eachbase/components";
import { MODAL_NAMES } from "@eachbase/constants";
import { useRouter } from "next/router";
import { Icons } from "@eachbase/theme";
import { BsPerson, BsPersonFill, BsChevronUp } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import {
  useSagaStore,
  profileActions,
  businessesActions,
} from "@eachbase/store";
import { useEffect, useRef, useState } from "react";
import useMedia from "use-media";
import axios from "axios";
import { useScrollPosition } from "react-use-scroll-position";

export const Header = () => {
  const path = typeof window !== "undefined" && window.location.pathname;
  const scrollPos = useScrollPosition();
  const router = useRouter();
  const profileContainerRef = useRef(null);
  const profile = useSelector(({ profile }) => profile);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isMobileViewport = useMedia({ maxWidth: 768 });
  // const getBusinessesSaga = useSagaStore(businessesActions.getBusinesses);
  const signOutSaga = useSagaStore(profileActions.signOut);
  const [windowPath, setWindowPath] = useState(router?.pathname);
  const [openSub, setOpenSub] = useState(
    windowPath === "/plans" || windowPath === "/billing"
  );
  const { open } = useModal();
  const token = typeof window !== "undefined" && localStorage.getItem("token");

  // const pageOffset = typeof window !== "undefined" && window.pageYOffset;
  const profileNavigationalList = () => {
    const signOut = () => {
      localStorage.removeItem("token");
      signOutSaga.dispatch();
      setWindowPath("");
      router.push("/", undefined, { shallow: true });
    };
    const handleRestaurant = async () => {
      setWindowPath("/restaurant");

      await axios(`/businesses/mybusiness`, { auth: true })
        .then((res) => router.push("/restaurant"))
        .catch(() => open(MODAL_NAMES.CREATE_RESTAURANT));
    };

    // const createMenu = async () => {
    //   await axios(`/businesses/mybusiness`, { auth: true }).then((res) =>
    //     open(MODAL_NAMES.MENU_FORM)
    //   );
    // };

    const handleProfile = () => {
      router.push("/profile");
      setWindowPath("/profile");
    };

    const handleSubscriptions = () => {
      setOpenSub(!openSub);
      // router.push("/profile")
      // setWindowPath('/profile')
    };

    const handleSubPages = (link) => {
      router.push(link);
      setWindowPath(link);
    };

    if (profile) {
      return (
        <NavigationContainer>
          {/* <Button
            className="create-button"
            color="default"
            outlined
            inactive
            onClick={() => createMenu()}
          >
            Create Menu
          </Button> */}
          <li style={{ pointerEvents: "none" }} className="account-icon">
            <div className="icon-container">
              <Icons.RedUser />
            </div>
            <Typography color="text" weight="bold">
              {profile.fullName}
            </Typography>
          </li>
          <li
            className={windowPath === "/restaurant" ? "activeItem" : " "}
            // onMouseDown={() =>  setWindowPath('/restaurant')}
            onClick={() => handleRestaurant()}
          >
            <div className="icon-container">
              <Icons.MenuIcon />
            </div>
            <Typography>Restaurant Profile</Typography>
          </li>
          <li
            className={windowPath === "/profile" ? "activeItem" : " "}
            onClick={handleProfile}
          >
            <div className="icon-container">
              <BsPerson />
            </div>
            <Typography>Account Settings</Typography>
          </li>

          <li
            className={openSub ? "activeItem" : " "}
            onClick={handleSubscriptions}
          >
            <div className="icon-container-sub">
              {/*<Icons.MenuIcon />*/}
              <Icons.Subscriptions />
            </div>
            <Typography>Subscription</Typography>
          </li>
          {openSub && (
            <div className="sub-wrapper">
              <div
                className="items"
                onClick={() => handleSubPages("/plans")}
                style={windowPath === "/plans" ? { color: "#FF453A" } : {}}
              >
                Plans and Pricing
              </div>
              <div
                className="items"
                onClick={() => handleSubPages("/billing")}
                style={windowPath === "/billing" ? { color: "#FF453A" } : {}}
              >
                Billing and Payment
              </div>
            </div>
          )}

          <li onClick={() => signOut()}>
            <div className="icon-container">
              <Icons.LogoutIcon />
            </div>
            <Typography>Sign out</Typography>
          </li>
        </NavigationContainer>
      );
    }

    return null;
  };

  const renderProfileDropdown = () => {
    useEffect(() => {
      // if (token) {
      //   getBusinessesSaga.dispatch();
      // }
    }, []);
    // const createMenu = async () => {
    //   await axios(`/businesses/mybusiness`, { auth: true })
    //     .then((res) => open(MODAL_NAMES.MENU_FORM))
    //     .catch(() => open(MODAL_NAMES.CREATE_RESTAURANT));
    // };

    if (!isMobileViewport && profile) {
      return (
        <div className="profile-container">
          <div
            className="profile"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            ref={profileContainerRef}
          >
            <BsPersonFill className="person-icon" />
            <Typography color="text">{profile.fullName}</Typography>
            <BsChevronUp
              className={`menu-toggle ${menuIsOpen ? "open" : ""}`}
            />
          </div>
          {/* <Button
            color="default"
            outlined
            inactive
            onClick={() => createMenu()}
            // onClick={() => open(MODAL_NAMES.MENU_FORM)}
          >
            Create Menu
          </Button> */}
          <Menu
            width={300}
            open={menuIsOpen}
            onRequestToClose={() => setMenuIsOpen(false)}
            positionalElementRef={profileContainerRef}
          >
            {profileNavigationalList()}
          </Menu>
        </div>
      );
    }
    return null;
  };

  const renderSignInButtons = () => {
    if (!profile) {
      return (
        <div className="sign-in-buttons">
          <Button
            className={"sign-in"}
            onClick={() => open(MODAL_NAMES.SIGN_IN)}
          >
            Sign In
          </Button>
          {/* <Button
            onClick={() => open(MODAL_NAMES.SIGN_IN)}
            color="default"
            outlined
            inactive
          >
            Create Menu
          </Button> */}
        </div>
      );
    }
    return null;
  };

  const renderMobileSideBar = () => {
    if (isMobileViewport) {
      return (
        <div className="mobile-sidebar">
          <div
            className="controller"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            {menuIsOpen ? <Icons.CloseBurgerIcon /> : <HiMenuAlt4 />}
          </div>
          {menuIsOpen && (
            <div
              className="menu-overlay"
              onClick={() => setMenuIsOpen(false)}
            />
          )}
          <div>
            <div className={`menu ${menuIsOpen ? "open" : ""}`}>
              {renderSignInButtons()}
              {profileNavigationalList()}
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <Container>
      <div
        className={
          path === "/"
            ? scrollPos.y > 10
              ? "header-scrolled"
              : menuIsOpen === true
              ? "header-scrolled-open"
              : "header-not-scrolled"
            : "header-not-scrolled"
        }
      >
        <div className="free-package-content">
          <span className="free-package-text">
            We have FREE Package for you!
          </span>
          <button
            type="button"
            className="start-btn"
            onClick={() => alert("Start")}
          >
            Start
          </button>
        </div>
        <div className="container-header">
          <div className="logo-container" onClick={() => router.push("/")}>
            <Icons.LogoIcon />
          </div>
          {renderProfileDropdown()}
          {!isMobileViewport ? renderSignInButtons() : null}
          {renderMobileSideBar()}
        </div>
      </div>
    </Container>
  );
};
