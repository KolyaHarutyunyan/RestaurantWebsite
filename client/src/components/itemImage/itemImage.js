import { Styled } from "./style";
import { CONSTANTS } from "../../constants";
import { Icon } from "../icon";
export const ItemImage = ({
  url,
  type,
  className,
  onRemove,
  onClick = () => {},
}) => {
  let svg = {
    foods: CONSTANTS.SVGNames.Food,
    drinks: CONSTANTS.SVGNames.Drink,
    restaurant: CONSTANTS.SVGNames.Build,
    menu: CONSTANTS.SVGNames.Menu,
  }[type];

  return (
    <Styled.Block
      className={className}
      bgi={url}
      onClick={() => {
        if (!url) onClick();
      }}
    >
      <div className="bgItemImage" />
      {!url && <Icon name={svg} className="itemIcon" />}
      {url && onRemove && (
        <button onClick={onRemove} className="removeItemImage">
          {" "}
          <Icon name={CONSTANTS.SVGNames.Close} />{" "}
        </button>
      )}
    </Styled.Block>
  );
};
