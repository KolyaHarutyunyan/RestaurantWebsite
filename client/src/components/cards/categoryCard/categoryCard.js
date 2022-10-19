import { StyledCategoryCard } from "./style";
import {
  Button,
  Switch,
  MoreDropdown,
  NoItemsCard,
} from "@eachbase/components";
import { Images } from "@eachbase/theme/images";
import { colors } from "@eachbase/theme";

export const CategoryCard = ({
  categories = [],
  currentCategory,
  handleCategoryAdd,
  handleCategoryEdit,
  handleCategoryDelete,
  handleCategorySwitch,
  handleCurrentCategory,
  noItemsText,
}) => {
  return (
    <StyledCategoryCard>
      <div className="category-add-box">
        <Button square fullWidth maxWidth={"95px"} onClick={handleCategoryAdd}>
          Add
        </Button>
      </div>
      {categories.length ? (
        <div className="category-list-box">
          <ul className="category-list">
            {categories.map((category) => (
              <li
                key={category.id}
                className={`category-item ${
                  !category.active ? "inactive" : ""
                } ${category.id === currentCategory?.id ? "current" : ""}`}
                onClick={() => handleCurrentCategory(category)}
              >
                <div className="category-name-box">
                  <MoreDropdown
                    vertical
                    handleEdit={() => handleCategoryEdit(category)}
                    handleDelete={() => handleCategoryDelete(category)}
                  />
                  <p className="category-name">{category.name}</p>
                </div>
                <div className="category-action-box">
                  <Switch
                    status={category.active}
                    offColor={colors.lightBlack}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategorySwitch(category);
                    }}
                  />
                  <div className="right-arrow">
                    <Images.RightArrow />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <NoItemsCard text={noItemsText} />
      )}
    </StyledCategoryCard>
  );
};
