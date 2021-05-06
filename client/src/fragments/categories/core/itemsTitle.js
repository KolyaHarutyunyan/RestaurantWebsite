import { useSelector } from "react-redux";
import { AddNewMenuItem, SelectMenuItem, Styled } from ".";
import { Button, Icon } from "@eachbase/components";
import { CONSTANTS } from "@eachbase/constants";

export const ItemsTitle = ({ activeCategory, activeType, close }) => {
  let title = activeCategory
    ? useSelector(
        (state) =>
          state.categories.find((category) => category.id === activeCategory)
            .title
      )
    : false;

  if (!title) return null;

  return (
    <Styled.ItemsTitle>
      <div className="name">
        <p>
          <Styled.BackBtn onClick={close}>
            <Icon name={CONSTANTS.SVGNames.LeftArrow} />
          </Styled.BackBtn>
          {title}
        </p>
        <Button.Accept className={"preview"}>Preview</Button.Accept>
      </div>
      <div className="newItem">
        <AddNewMenuItem
          activeType={activeType}
          activeCategory={activeCategory}
        />
        <div className="or">OR</div>
        <SelectMenuItem
          activeType={activeType}
          activeCategory={activeCategory}
        />
      </div>
    </Styled.ItemsTitle>
  );
};
