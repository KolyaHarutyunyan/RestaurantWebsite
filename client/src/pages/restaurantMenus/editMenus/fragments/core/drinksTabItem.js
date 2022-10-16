import { StyledDrinksTabItem } from "./style";
import { CategoryCard, ProductCard } from "@eachbase/components";
import { useForm } from "react-hook-form";

export const DrinksTabItem = () => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <StyledDrinksTabItem>
      <CategoryCard register={register} />
      <ProductCard />
    </StyledDrinksTabItem>
  );
};
