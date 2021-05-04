import { Container } from "./style";
import { CONSTANTS } from "@eachbase/constants";
export const MenuItemCard = ({ data }) => {
  const img = data.images.length
    ? data.images[0].thumbURL
    : CONSTANTS.ASSETS.DEFAULT_COVER;

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
            <div className="price">{data.price}</div>
          </div>
          <div className="descr">{data.description}</div>
          <div className="noth"></div>
        </div>
      </div>
    </Container>
  );
};
