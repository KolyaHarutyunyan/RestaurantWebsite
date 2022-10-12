import { StyledDrinksTabItem } from "./style";
import { CategoryCard, ProductCard } from "@eachbase/components";

export const DrinksTabItem = () => {
  return (
    <StyledDrinksTabItem>
      <CategoryCard />
      <ProductCard />
    </StyledDrinksTabItem>
  );
};
