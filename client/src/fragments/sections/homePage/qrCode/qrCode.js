import { Container } from "./style";
import { Image, Typography } from "@eachbase/components";
export const QRCode = () => {
  return (
    <Container>
      <div className="line" />
      <Image src={"./assets/images/QR_Code.png"} />
      <div className="line">
        <Typography color="invert" weight="bold">
          Scan the QR Code for DEMO Version
        </Typography>
      </div>
    </Container>
  );
};
