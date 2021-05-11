import { useSelector } from "react-redux";
import { Container } from "./style";
import { Typography, Button, Menu, useModal } from "@eachbase/components";
import { MODAL_NAMES } from "@eachbase/constants";
import { Icons } from "@eachbase/theme";
import { BsPersonFill, BsChevronUp } from "react-icons/bs";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useRef, useState } from "react";
import useMedia from "use-media";

export const Header = () => {
  const profileContainerRef = useRef(null);
  const { profile } = useSelector(({ profile }) => ({ profile }));
  const { open } = useModal();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isMobileViewport = useMedia({ maxWidth: 768 });

  const renderProfileDropdown = () => {
    if (!isMobileViewport && profile) {
      return (
        <div className="profile-container">
          <div
            className="profile"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            ref={profileContainerRef}
          >
            <BsPersonFill className="person-icon" />
            <Typography color="text">Profile Name</Typography>
            <BsChevronUp
              className={`menu-toggle ${menuIsOpen ? "open" : ""}`}
            />
          </div>
          <Button outlined inactive>
            Create Menu
          </Button>
          <Menu
            width={300}
            open={menuIsOpen}
            onRequestToClose={() => setMenuIsOpen(false)}
            positionalElementRef={profileContainerRef}
          >
            ...
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
          <Button onClick={() => open(MODAL_NAMES.SIGN_IN)}>Sign In</Button>
          <Button onClick={() => open(MODAL_NAMES.SIGN_IN)} inactive outlined>
            Create Menu
          </Button>
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
            {menuIsOpen ? <IoMdClose /> : <IoMdMenu />}
          </div>
          <div className={`menu ${menuIsOpen ? "open" : ""}`}>
            {renderSignInButtons()}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <Container>
      <div className="logo-container">
        <Icons.LogoIcon />
        <Typography weight="bold" color="text" size="1.250rem">
          Menuz
        </Typography>
      </div>
      {renderProfileDropdown()}
      {!isMobileViewport ? renderSignInButtons() : null}
      {renderMobileSideBar()}
    </Container>
  );
};
