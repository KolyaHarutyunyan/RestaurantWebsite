import { StyledCategoryCard } from "./style";
import {
  UserInput,
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
  loader,
  register,
  handleCategoryAdd,
  handleCategoryEdit,
  handleCategoryDelete,
  handleCategorySwitch,
  handleCurrentCategory,
  noItemsText,
}) => {
  return (
    <StyledCategoryCard>
      <form onSubmit={handleCategoryAdd}>
        <div className="category-form">
          <UserInput
            inputClassName={"category-input"}
            required={true}
            inputType={"text"}
            inputName={"name"}
            inputPlaceholder={"Select/Create Category"}
            {...register("name", { required: true })}
          />
          <Button square fullWidth maxWidth={"95px"} onLoad={loader}>
            Add
          </Button>
        </div>
      </form>
      {categories.length ? (
        <div className="category-list-box">
          <ul className="category-list">
            {categories.map((category) => (
              <li
                key={category.id}
                className={`category-item ${
                  !category.isActive && false ? "inactive" : ""
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
                    status={category.isActive || true}
                    offColor={colors.lightBlack}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategorySwitch(category.id);
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
