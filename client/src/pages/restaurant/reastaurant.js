import { Styled } from "./style";
import { PageTitle } from "@eachbase/components";
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
            ICON Download QR Code
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
