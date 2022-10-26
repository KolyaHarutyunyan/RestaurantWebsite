import { StyledProductForm } from "./style";
import { FileUpload, UserInput } from "@eachbase/components";

export const ProductFormContent = ({
  chosenProduct,
  register,
  productType,
  productImgs,
  handleImgChange,
  handleImgRemove,
  handleImgPreview,
  imgIdx,
  error,
}) => {
  return (
    <StyledProductForm>
      <div className="name-price-box">
        <UserInput
          required={true}
          inputType={"text"}
          inputName={"name"}
          inputPlaceholder={"Menu Name*"}
          defaultValue={chosenProduct?.name}
          {...register("name", { required: true })}
        />
        <UserInput
          inputClassName={"price-input"}
          required={false}
          inputType={"number"}
          inputName={"price"}
          inputPlaceholder={"$ Price"}
          defaultValue={chosenProduct?.note}
          {...register("price")}
        />
      </div>
      <UserInput
        required={false}
        isTextArea={true}
        inputName={"description"}
        inputPlaceholder={"Add Brief Description"}
        defaultValue={chosenProduct?.description}
        charCounterIsShown={false}
        {...register("description")}
      />
      <UserInput
        required={false}
        inputType={"text"}
        inputName={"note"}
        inputPlaceholder={"Special Offers e.g. add chili sauce $2*"}
        defaultValue={chosenProduct?.note}
        {...register("note")}
      />
      <FileUpload
        fileClassName={"item-imgs-uploader"}
        many={true}
        title={"Image"}
        type={productType}
        url={productImgs}
        handleChange={handleImgChange}
        handleRemoveMany={handleImgRemove}
        error={error}
        selectedIndex={imgIdx}
        onImagePreviewClick={handleImgPreview}
        infoText={"*Selected image will be used as the main"}
      />
    </StyledProductForm>
  );
};
