import { Styled } from "./style";
import { Typography } from "@eachbase/components";
import { Menus, RestaurantInfos } from "@eachbase/fragments";
import { useSelector } from "react-redux";

export const RestaurantPage = () => {
  const QRImageUrl = useSelector(({ restaurant }) =>
    restaurant ? restaurant.QRImageUrl : null
  );

  return (
    <Styled.Content>
      <Styled.BlockTitle>
        <Typography>Restaurant</Typography>
        {QRImageUrl && (
          <a href={"#QRImageUrl"} className="downloadBtn">
            ICON Download QR Code
          </a>
        )}
      </Styled.BlockTitle>
      <RestaurantInfos />
      <Styled.BlockTitle>
        <Typography>Menus</Typography>
      </Styled.BlockTitle>
      <Menus />
    </Styled.Content>
  );
};
