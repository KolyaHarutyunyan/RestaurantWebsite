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

  return (
    <Container>
      <div className="head">
        <Typography weight="bold" color="text" size="3rem">
          Menu
        </Typography>
        <div className="actions">
          <Button link>
            <div className="icon">
              <IoIosTrash />
            </div>
            Delete Menu
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
