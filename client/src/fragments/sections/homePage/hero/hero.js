import { Container } from "./style";
import { Typography, Button, Image, useModal } from "@eachbase/components";
import { MODAL_NAMES } from "@eachbase/constants";
export const Hero = () => {
  const { open } = useModal();
  const token = typeof window !== "undefined" && localStorage.getItem("token");
  const handleCreate = () => {
    if (token) {
      open(MODAL_NAMES.MENU_FORM);
    } else {
      open(MODAL_NAMES.SIGN_IN);
    }
  };

  return (
    <Container>
      <div className="hero">
        <div className="content">
          <Typography color="text" weight="bold" className="title">
            Build Free Interactive
          </Typography>
          <Typography weight="bold" className="title">
            QR Menus
          </Typography>
          <Typography color="text" className="description">
            No more paper or PDF QR menus that are static and hard to change and
            manage. Let your customers scroll through your menu, click and
            interact with the menu items.
          </Typography>
          <Button onClick={handleCreate}>Create FREE Menu</Button>
        </div>
        <div className="image-wrapper">
          <Image src={"./assets/images/heroHomepage.png"} />
        </div>
      </div>
    </Container>
  );
};
