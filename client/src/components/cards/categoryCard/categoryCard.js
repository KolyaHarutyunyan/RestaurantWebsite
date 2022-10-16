import { StyledCategoryCard } from "./style";
import { UserInput, Button, Switch, MoreDropdown } from "@eachbase/components";
import { Images } from "@eachbase/theme/images";
import { colors } from "@eachbase/theme";

export const CategoryCard = ({
  categories = [],
  handleCurrentCategory,
  currentCategory,
  handleSubmit,
  register,
  handleEdit,
  handleDelete,
  handleSwitch,
}) => {
  return (
    <StyledCategoryCard>
      <form onSubmit={handleSubmit}>
        <div className="category-form">
          <UserInput
            inputClassName={"category-input"}
            required={true}
            inputType={"text"}
            inputName={"name"}
            inputPlaceholder={"Select/Create Category"}
            {...register("name", { required: true })}
          />
          <Button square fullWidth maxWidth={"95px"}>
            Add
          </Button>
        </div>
      </form>
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
                  handleEdit={() => handleEdit(category.id)}
                  handleDelete={() => handleDelete(category.id)}
                />
                <p className="category-name">{category.name}</p>
              </div>
              <div className="category-action-box">
                <Switch
                  status={category.isActive || true}
                  offColor={colors.lightBlack}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSwitch(category.id);
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
    </StyledCategoryCard>
  );
};
