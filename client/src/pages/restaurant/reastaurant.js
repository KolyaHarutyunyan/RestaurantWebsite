import { Styled } from "./style";
import { Icon, PageTitle } from "@eachbase/components";
import { CONSTANTS } from "@eachbase/constants";
import { Menus, RestaurantInfos } from "@eachbase/fragments";
import { useSelector } from "react-redux";

export const RestaurantPage = () => {
  const QRImageUrl = useSelector(({ restaurant }) =>
    restaurant ? restaurant.QRImageUrl : null
  );

  return (
    <Styled.Content>
      <Styled.BlockTitle>
        <PageTitle>Restaurant</PageTitle>
        {QRImageUrl && (
          <a href={"#QRImageUrl"} className="downloadBtn">
            <Icon name={CONSTANTS.SVGNames.Download} /> Download QR Code
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
