import { Styled } from "./style";
import {
  FoodIcon,
  DrinkIcon,
  RedLineIcon,
  MenuIcon,
} from "@eachbase/components/icons";
export const ItemImage = ({
  url,
  type,
  className,
  onRemove,
  onClick = () => {},
}) => {
  const svg = {
    foods: FoodIcon,
    drinks: DrinkIcon,
    restaurant: RedLineIcon,
    menu: MenuIcon,
  }[type];
  const Icon = svg;

  return (
    <Styled.Block
      className={className}
      bgi={url}
      onClick={() => {
        if (!url) onClick();
      }}
    >
      <div className="bgItemImage" />
      {!url && <Icon />}
      {url && onRemove && (
        <button onClick={onRemove} className="removeItemImage">
          <Icon />
        </button>
      )}
    </Styled.Block>
  );
};
