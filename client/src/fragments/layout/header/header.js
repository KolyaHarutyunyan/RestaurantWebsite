import {useDispatch, useSelector} from "react-redux";
import { Container, NavigationContainer } from "./style";
import { Typography, Button, Menu, useModal } from "@eachbase/components";
import { MODAL_NAMES } from "@eachbase/constants";
import { useRouter } from "next/router";
import { Icons } from "@eachbase/theme";
import { BsPerson,BsPersonFill, BsChevronUp } from "react-icons/bs";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { HiMenuAlt4 } from "react-icons/hi";
import {useSagaStore, profileActions, businessesActions,} from "@eachbase/store";
import {useEffect, useRef, useState} from "react";
import useMedia from "use-media";
import axios from "axios";
import {useScrollPosition} from "react-use-scroll-position";

export const Header = () => {

    const path = typeof window !== 'undefined' && window.location.pathname
  const scrollPos = useScrollPosition();
  const router = useRouter();
  const profileContainerRef = useRef(null);
  const profile = useSelector(({ profile }) => profile);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isMobileViewport = useMedia({ maxWidth: 768 });
  const getBusinessesSaga = useSagaStore(businessesActions.getBusinesses);
  const signOutSaga = useSagaStore(profileActions.signOut);
  const { open } = useModal();
  const pageOffset = typeof window !== 'undefined' &&  window.pageYOffset
  const profileNavigationalList = () => {
    const signOut = () => {
      localStorage.removeItem("token");
      signOutSaga.dispatch();
      router.push("/", undefined, { shallow: true });
    }
   const handleRestaurant = async () =>{
       await axios(`/businesses/mybusiness`, { auth:true }).then(res =>
            router.push("/restaurant")
         ).catch(()=> open(MODAL_NAMES.CREATE_RESTAURANT)
       )
   }

      const createMenu = async () =>{
          await axios(`/businesses/mybusiness`, { auth:true }).then(res =>
              open(MODAL_NAMES.MENU_FORM)
          )
      }



    if (profile) {
      return (
        <NavigationContainer>

            <Button
                className='create-button'
                color="default"
                outlined
                inactive
                onClick={() => createMenu()}
            >
                Create Menu
            </Button>
          <li className='account-icon'>
            <div className="icon-container">
              <Icons.RedUser />
            </div>
            <Typography color="text" weight="bold">
              {profile.fullName}
            </Typography>
          </li>
          <li  onClick={ () => handleRestaurant()  }>
            <div className="icon-container">
              <Icons.MenuIcon />
            </div>
            <Typography>
              Restaurant Profile
            </Typography>
          </li>
          <li onClick={() => router.push("/profile")}>
            <div className="icon-container">
              <BsPerson />
            </div>
            <Typography>
              Account Settings
            </Typography>
          </li>
          <li   onClick={() => signOut()}>
            <div className="icon-container">
              <Icons.LogoutIcon />
            </div>
            <Typography>
              Sign out
            </Typography>
          </li>
        </NavigationContainer>
      );
    }

    return null;
  };

  const renderProfileDropdown = () => {

      useEffect(() => getBusinessesSaga.dispatch(), []);


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
          <Button
            color="default"
            outlined
            inactive
            onClick={() => open(MODAL_NAMES.MENU_FORM)}
          >
            Create Menu
          </Button>
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
          <Button onClick={() => open(MODAL_NAMES.SIGN_IN)}>Sign In</Button>
          <Button
            onClick={() => open(MODAL_NAMES.SIGN_IN)}
            color="default"
            outlined
            inactive
          >
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
            { menuIsOpen ? <Icons.CloseBurgerIcon /> : <HiMenuAlt4 /> }
          </div>
            <div >
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
    <Container >
        <div className={path === '/' ?
            scrollPos.y > 10 ? 'header-scrolled'  :
            menuIsOpen === true ? 'header-scrolled-open' :
                'header-not-scrolled'   :'header-scrolled'} >
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
