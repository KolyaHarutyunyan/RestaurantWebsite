import { SelectCategory, Styled } from ".";
import { Button } from "@eachbase/components";
export const CategoriesTitle = ({ activeType, changeTo }) => {
  return (
    <Styled.CategoriesTitle>
      <Styled.DoubleBtnBlock>
        <Styled.DoubleBlockButton
          onClick={() => changeTo("foods")}
          active={activeType === "foods"}
        >
          Foods
        </Styled.DoubleBlockButton>
        <Styled.DoubleBlockButton
          onClick={() => changeTo("drinks")}
          active={activeType === "drinks"}
        >
          drinks
        </Styled.DoubleBlockButton>
      </Styled.DoubleBtnBlock>
      <SelectCategory activeType={activeType} />
      <Button className={"categories-preview"}>Preview</Button>
    </Styled.CategoriesTitle>
  );
};
