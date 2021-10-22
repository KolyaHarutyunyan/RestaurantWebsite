import { Container } from "./style";
import { CONSTANTS } from "@eachbase/constants";
export const MenuItemCard = ({ data }) => {
  const img = data.images.length
    ? data.images[0].thumbURL
    : CONSTANTS.ASSETS.DEFAULT_COVER;

  const itemPrice = data && data.price.toString()
  let pricePoint = itemPrice.search("\\.");

  return (
    <Container>
      <div className="wrapper">
        <div
          className="img"
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
        <div className="content">
          <div className="head">
            <div className="title">{data.name}</div>
            <div className="price">
              {pricePoint === -1 ? `${data.price}.00` : data.price}
             </div>

          </div>
          <div className="descr">{data.description}</div>
          <div className="noth"></div>
        </div>
      </div>
    </Container>
  );
};
