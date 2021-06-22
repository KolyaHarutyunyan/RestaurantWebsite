import { Container } from "./style";
import { CONSTANTS } from "@eachbase/constants";
import { RiLogoutBoxLine, IoPerson } from "react-icons/all";
import { useSelector } from "react-redux";
import { history } from "@eachbase/utils";
export const Header = () => {
  const userEmail = useSelector(({ profile }) => profile.email || "");

  const logOut = () => {
    if (window.confirm("Are you sure?")) {
      localStorage.removeItem("token");
      history.push("/login");
    }
  };
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
          <div className="title">{userEmail}</div>
        </div>
        <div className="item">
          <div className="logo">
            <RiLogoutBoxLine />
          </div>
          <div className="title" onClick={() => logOut()}>
            Log out
          </div>
        </div>
      </div>
    </Container>
  );
};
