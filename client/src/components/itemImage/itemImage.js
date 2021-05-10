import { Styled } from "./style";
import {
  FoodIcon,
  DrinkIcon,
  RedLineIcon,
  MenuIcon,
} from "@eachbase/theme/icons";
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
        <Button onClick={onRemove} className="removeItemImage">
          <Icon />
        </Button>
      )}
    </Styled.Block>
  );
};
