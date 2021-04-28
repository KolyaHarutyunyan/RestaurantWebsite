import { Styled } from "./style";
import { Icon, PageTitle } from "@eachbase/components";
import { SVGNames } from "@eachbase/constants";
import { Menus, RestaurantInfos } from "@eachbase/fragments";
import { useSelector } from "react-redux";

export const RestaurantPage = () => {
  let QRImageUrl = useSelector((state) => state.restaurant.QRImageUrl || false);
  return (
    <Styled.Content>
      <Styled.BlockTitle>
        <PageTitle>Restaurant</PageTitle>
        {QRImageUrl && (
          <a href={"#QRImageUrl"} className="downloadBtn">
            <Icon name={SVGNames.Download} /> Download QR Code
          </a>
        )}
      </Styled.BlockTitle>
      <RestaurantInfos />
      <Styled.BlockTitle>
        <PageTitle>Menus</PageTitle>
      </Styled.BlockTitle>
      <Menus />
    </Styled.Content>
  );
};
