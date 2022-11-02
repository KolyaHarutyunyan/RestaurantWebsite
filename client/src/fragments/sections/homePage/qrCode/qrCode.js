import { Container } from "./style";
import { Image, Typography } from "@eachbase/components";
export const QRCode = () => {
  return (
    <Container>
      <div className="line" />
        <div className='qr-image'>
      <Image src={"./assets/images/qrDownloaded.svg"} />
        </div>
      <div className="line">
        <Typography  className='qr-text' color="white" weight="bold">
          Scan the QR Code for DEMO Version
        </Typography>
      </div>
    </Container>
  );
};
