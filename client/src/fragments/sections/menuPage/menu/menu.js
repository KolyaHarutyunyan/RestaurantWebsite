import { Container } from "./style";
import {
  Typography,
  Button,
  Switch,
  Image,
  useModal,
} from "@eachbase/components";
import { IoIosTrash } from "react-icons/io";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { MODAL_NAMES } from "@eachbase/constants";
import { useSagaStore, menusActions } from "@eachbase/store";
import { BsImage } from "react-icons/bs";
import { useEffect } from "react";
import { Icons } from "@eachbase/theme";

export const Menu = () => {
  const router = useRouter();
  const { open } = useModal();
  const { menuId } = router.query;
  const currentBusinessId = useSelector(({ businesses }) =>
    businesses ? businesses.id : ""
  );
  const currentMenu = useSelector(
    ({ menus }) => menus.find((cMenu) => cMenu.id === menuId) || {}
  );
  const switchMenuStatusSaga = useSagaStore(menusActions.switchMenuStatus);
  const deleteMenuSaga = useSagaStore(menusActions.deleteMenu);

  useEffect(() => {
    if (deleteMenuSaga.status.onSuccess) {
      deleteMenuSaga.destroy.all();
      router.push("/restaurant");
    }
  }, [deleteMenuSaga]);

  return (
    <Container>



          <div className='breadcrumb'>
            <a href="/restaurant">Restaurant</a>
            <Icons.Arrow />
            <Typography className='bred-menu' color='text'>Menu</Typography>
          </div>

      <div className="head">
        <Typography className='title-head' weight="bold" color="text" >
          Menu
        </Typography>
        <div className="actions">
          <Button
            link
            className='delete-button'
            onClick={() => {
              if (window.confirm("Are you sure?")) {
                deleteMenuSaga.dispatch(currentMenu.id);
              }
            }}
          >
            <div className="icon">
              <IoIosTrash />
            </div>
           <span className='delete-text'> Delete Menu</span>
          </Button>
          <div className="switch-container">
            <Switch
              status={!!currentMenu.isActive}
              onClick={() =>
                switchMenuStatusSaga.dispatch(currentMenu.id, currentBusinessId)
              }
            />
            <Typography className="switch-title" color="action" weight="bold">
              {!!currentMenu.isActive ? "Deactivate" : "Activate"}
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
            <Button
                height={'42px'}
                maxWidth={'110px'}
              disabled={!currentMenu.id}
              onClick={() =>
                open(MODAL_NAMES.MENU_FORM, { menuId: currentMenu.id })
              }
            >
              Edit
            </Button>
          </div>
        </div>

        <div
          className={`logo mobile ${!currentMenu.image ? "no-image" : null} `}
          style={{
            backgroundImage: `url(${
              currentMenu.image ? currentMenu.image.originalUrl : null
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {!currentMenu.image ? <BsImage className /> : null}
        </div>
        <Image
          src={currentMenu.image ? currentMenu.image.originalUrl : null}
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
          <Button
              maxWidth={'110px'}
              height={'42px'}
            disabled={!currentMenu.id}
            onClick={() =>
              open(MODAL_NAMES.MENU_FORM, { menuId: currentMenu.id })
            }
          >
            Edit
          </Button>
        </div>
      </div>
    </Container>
  );
};
