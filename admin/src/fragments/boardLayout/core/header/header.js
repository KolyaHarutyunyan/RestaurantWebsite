import { Container } from "./style";
import { CONSTANTS } from "@eachbase/constants";
import { RiLogoutBoxLine, IoPerson } from "react-icons/all";
export const Header = () => {
  return (
    <Container>
      <div className="logo">
        <img className="img" src={CONSTANTS.ASSETS.LOGO} alt="" />
        <div className="title">{CONSTANTS.APP.NAME}</div>
      </div>
      <div className="menu">
        <div className="item">
          <div className="logo">
            <IoPerson />
          </div>
          <div className="title">Username</div>
        </div>
        <div className="item">
          <div className="logo">
            <RiLogoutBoxLine />
          </div>
          <div className="title">Log out</div>
        </div>
      </div>
    </Container>
  );
};
