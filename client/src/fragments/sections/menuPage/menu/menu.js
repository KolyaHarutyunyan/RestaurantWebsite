import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Container } from "./style";
import {
  Typography,
  Button,
  Switch,
  Image,
  useModal,
  SmallButton,
  Loader,
} from "@eachbase/components";
import { MODAL_NAMES } from "@eachbase/constants";
import { BsImage } from "react-icons/bs";
import { Icons } from "@eachbase/theme";

export const Menu = ({ currentMenu }) => {
  const router = useRouter();
  const { open } = useModal();
  const currentBusinessId = useSelector(({ businesses }) =>
    businesses ? businesses.id : ""
  );
  const [switched, setSwitched] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (currentMenu) {
      setSwitched(currentMenu.isActive);
    }
  }, [currentMenu]);

  // const switchMenuStatusSaga = useSagaStore(menusActions.switchMenuStatus);
  // const deleteMenuSaga = useSagaStore(menusActions.deleteMenu);
  // useEffect(() => {
  //   if (deleteMenuSaga.status.onSuccess) {
  //     deleteMenuSaga.destroy.all();
  //     router.push("/restaurant");
  //   }
  // }, [deleteMenuSaga]);

  const handleDeleteMenu = (id) => {
    setLoader(true);
    axios
      .delete(`/menus/${id}`, { auth: true })
      .then(() => {
        router.push("/restaurant");
        setLoader(false);
      })
      .catch(() => setLoader(false));
  };

  // const handleToggle = (id, busId) => {
  //     setSwitched(!switched)
  //     axios.patch(`/menus/${id}/toggle`, {busId}, {auth: true}).then((res) => res)
  // }

  return (
    <Container>
      <div className="breadcrumb">
        <a href="/restaurant">Restaurant</a>
        <Icons.Arrow />
        <Typography className="bred-menu" color="text">
          Menu
        </Typography>
      </div>

      <div className="head">
        <Typography className="title-head" weight="bold" color="text">
          Menu
        </Typography>
        <div className="actions">
          <Button
            link
            className="delete-button"
            onClick={() => {
              handleDeleteMenu(currentMenu.id);
            }}
          >
            {loader ? (
              <Loader small={true} />
            ) : (
              <>
                <div className="icon">
                  <Icons.DeleteButton />
                </div>
                <span className="delete-text"> Delete Menu</span>
              </>
            )}
          </Button>
          <div className="switch-container">
            <Switch
              status={switched}
              // onClick={() => handleToggle(currentMenu.id, currentBusinessId)}
            />
            <Typography className="switch-title" color="action" weight="normal">
              {switched ? "Deactivate" : "Activate"}
            </Typography>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="mobile-head">
          <Typography color="text" className="title" weight="bold">
            {currentMenu.name}
          </Typography>
          <div className="actions">
            <SmallButton
              handleClick={() =>
                open(MODAL_NAMES.MENU_FORM, {
                  menuId: currentMenu.id,
                  menuInfo: currentMenu,
                })
              }
              text={"Edit"}
              disabled={!currentMenu.id}
            />
            {/*<Button*/}
            {/*    height={'42px'}*/}
            {/*    maxWidth={'110px'}*/}
            {/*  disabled={!currentMenu.id}*/}
            {/*  onClick={() =>*/}
            {/*    */}
            {/*  }*/}
            {/*>*/}
            {/*  Edit*/}
            {/*</Button>*/}
          </div>
        </div>

        <div
          className={`logo mobile ${!currentMenu.image ? "no-image" : null} `}
          style={{
            backgroundImage: `url(${
              currentMenu.image ? currentMenu.image.url : null
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {!currentMenu.image ? <BsImage className /> : null}
        </div>
        <Image
          src={currentMenu.image ? currentMenu.image.url : null}
          className="logo desktop"
          responsiveOnMobile
        />
        <Typography color="text" className="descr-mobile">
          {currentMenu.description}
        </Typography>
        <div className="info desktop">
          <Typography color="text" className="title" weight="bold">
            {currentMenu.name}
          </Typography>
          <Typography color="text" className="descr">
            {currentMenu.description}
          </Typography>
        </div>
        <div className="actions desktop">
          <SmallButton
            handleClick={() =>
              open(MODAL_NAMES.MENU_FORM, {
                menuId: currentMenu.id,
                menuInfo: currentMenu,
                current: true,
              })
            }
            text={"Edit"}
            disabled={!currentMenu.id}
          />
          {/*<Button*/}
          {/*    maxWidth={'110px'}*/}
          {/*    height={'42px'}*/}
          {/*    disabled={!currentMenu.id}*/}
          {/*    onClick={() =>*/}
          {/*    open(MODAL_NAMES.MENU_FORM, { menuId: currentMenu.id })*/}
          {/*  }*/}
          {/*>*/}
          {/*  Edit*/}
          {/*</Button>*/}
        </div>
      </div>
    </Container>
  );
};
