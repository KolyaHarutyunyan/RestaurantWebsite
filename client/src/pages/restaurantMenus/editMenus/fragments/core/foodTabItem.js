import { StyledFoodTabItem } from "./style";
import { CategoryCard, ProductCard } from "@eachbase/components";
import { dummyFoodCategories } from "./constants";

export const FoodTabItem = () => {
  return (
    <StyledFoodTabItem>
      <CategoryCard categories={dummyFoodCategories} />
      <ProductCard />
    </StyledFoodTabItem>
  );
};
