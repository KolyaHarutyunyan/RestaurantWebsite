import { Container } from "./style";
import { Image } from "@eachbase/components";
export const QRCode = () => {
  return (
    <Container>
      <div className="line" />
      <Image src={"./assets/images/QR_Code.png"} />
      <div className="line" />
    </Container>
  );
};
