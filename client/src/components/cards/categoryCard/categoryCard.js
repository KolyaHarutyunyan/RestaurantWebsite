import { StyledCategoryCard } from "./style";
import { UserInput, Button, Switch, MoreDropdown } from "@eachbase/components";
import { useForm } from "react-hook-form";
import { Images } from "@eachbase/theme/images";

export const CategoryCard = ({ categories = [] }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data, "data");
  };

  return (
    <StyledCategoryCard>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          {categories.map((category, index) => (
            <li key={index} className="category-item">
              <div className="category-name-box">
                <MoreDropdown
                  vertical={true}
                  handleEdit={() => {}}
                  handleDuplicate={() => {}}
                  handleDelete={() => {}}
                />
                <p className="category-name">{category.name}</p>
              </div>
              <div className="category-action-box">
                <Switch status={category.isActive} onClick={() => {}} />
                <Images.RightArrow />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StyledCategoryCard>
  );
};
