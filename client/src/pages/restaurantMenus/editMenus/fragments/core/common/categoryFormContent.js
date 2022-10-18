import { StyledCategoryForm } from "./style";
import { UserInput } from "@eachbase/components";

export const CategoryFormContent = ({ chosenCategory, register }) => {
  return (
    <StyledCategoryForm>
      <UserInput
        required={true}
        inputType={"text"}
        inputName={"name"}
        inputPlaceholder={"Category Name"}
        defaultValue={chosenCategory?.name}
        {...register("name", { required: true })}
      />
      {/* <UserInput
        required={false}
        isTextArea={true}
        inputName={"description"}
        inputPlaceholder={"Add Brief Description"}
        defaultValue={chosenCategory?.description}
        charCounterIsShown={false}
        {...register("description")}
      />
      <UserInput
        required={false}
        inputType={"text"}
        inputName={"note"}
        inputPlaceholder={"Special Offers e.g. add chili sauce $2*"}
        defaultValue={chosenCategory?.note}
        {...register("note")}
      /> */}
    </StyledCategoryForm>
  );
};
