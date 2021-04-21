import { Style } from "./style";
import { CONSTANTS } from "@eachbase/constants";
import { RiLogoutBoxLine, IoPerson } from "react-icons/all";
export const Header = () => {
  return (
    <Style.Container>
      <Style.Logo.Wrapper>
        <Style.Logo.Img src={CONSTANTS.ASSETS.LOGO} />
        <Style.Logo.Title>{CONSTANTS.APP.NAME}</Style.Logo.Title>
      </Style.Logo.Wrapper>
      <Style.Menu.Wrapper>
        <Style.Menu.Item.Wrapper>
          <Style.Menu.Item.Logo>
            <IoPerson />
          </Style.Menu.Item.Logo>
          <Style.Menu.Item.Title>Username</Style.Menu.Item.Title>
        </Style.Menu.Item.Wrapper>
        <Style.Menu.Item.Wrapper>
          <Style.Menu.Item.Logo>
            <RiLogoutBoxLine />
          </Style.Menu.Item.Logo>
          <Style.Menu.Item.Title>Log out</Style.Menu.Item.Title>
        </Style.Menu.Item.Wrapper>
      </Style.Menu.Wrapper>
    </Style.Container>
  );
};
