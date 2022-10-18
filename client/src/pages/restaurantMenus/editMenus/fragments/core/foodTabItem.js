import { useState, useEffect } from "react";
import { StyledFoodTabItem, StyledMenuDrawer } from "./style";
import { CategoryCard, ItemFormCard, ProductCard } from "@eachbase/components";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { categoriesActions, itemActions, useSagaStore } from "@eachbase/store";
import { CategoryFormContent, ProductFormContent } from "./common";
import {
  CATEGORY_FORM,
  PRODUCT_FORM_ADD,
  PRODUCT_FORM_EDIT,
} from "./constants";
import { ImgUploader, useFileUpload } from "@eachbase/utils";

export const FoodTabItem = () => {
  const restaurant = useSelector(({ businesses }) => businesses);
  const menu = useSelector((state) => state.menus.menuById);

  const createCategorySaga = useSagaStore(categoriesActions.createCategory);
  const editCategorySaga = useSagaStore(categoriesActions.editCategory);
  const deleteCategorySaga = useSagaStore(categoriesActions.deleteCategory);
  const switchCategorySaga = useSagaStore(categoriesActions.switchCategory);

  const createProductSaga = useSagaStore(itemActions.createProduct);
  const editProductSaga = useSagaStore(itemActions.editProduct);
  // const deleteProductSaga = useSagaStore(itemActions.deleteProduct);

  const [foodCategory, setFoodCategory] = useState(null);
  const [chosenFoodCategory, setChosenFoodCategory] = useState(null);
  const [chosenFoodProduct, setChosenFoodProduct] = useState(null);
  const [drawerPosition, setDrawerPosition] = useState({ right: false });
  const [formContentLabel, setFormContentLabel] = useState("");

  const createCategoryForm = useForm();
  const editCategoryForm = useForm();
  const submitProductForm = useForm();

  const {
    imgs,
    imgsPush,
    deletedImg,
    index,
    error,
    handleFilesChange,
    handleFilesRemove,
    handlePreviewClick,
  } = useFileUpload();

  useEffect(() => {
    if (createCategorySaga?.status?.onSuccess) {
      createCategorySaga?.destroy?.success();
      createCategoryForm?.reset();
    }
  }, [createCategorySaga?.status]);

  useEffect(() => {
    if (deleteCategorySaga?.status?.onSuccess) {
      deleteCategorySaga?.destroy?.success();
      if (foodCategory?.id === chosenFoodCategory?.id) {
        setFoodCategory(null);
      }
    }
  }, [deleteCategorySaga?.status]);

  useEffect(() => {
    if (createProductSaga?.status?.onSuccess) {
      createProductSaga?.destroy?.success();
      closeDrawer();
    } else if (editProductSaga?.status?.onSuccess) {
      editProductSaga?.destroy?.success();
      closeDrawer();
    } else if (editCategorySaga?.status?.onSuccess) {
      editCategorySaga?.destroy?.success();
      closeDrawer();
    }
  }, [
    createCategorySaga?.status,
    editProductSaga?.status,
    editCategorySaga?.status,
  ]);

  const toggleDrawer = (anchor, open) => {
    setDrawerPosition({ ...drawerPosition, [anchor]: open });
  };

  const closeDrawer = () => {
    toggleDrawer("right", false);
    editCategoryForm.reset();
    submitProductForm.reset();
  };

  const handleCurrentCategory = (category) => {
    setFoodCategory(category);
  };

  const handleCategoryEdit = (category) => {
    setChosenFoodCategory(category);
    setFormContentLabel(CATEGORY_FORM);
    toggleDrawer("right", true);
  };

  const handleCategoryDelete = (category) => {
    setChosenFoodCategory(category);
    deleteCategorySaga.dispatch(menu.id, category.id, "FOOD");
  };

  const handleCategorySwitch = (categoryId) => {
    switchCategorySaga.dispatch(menu.id, categoryId);
  };

  const handleCategoryAdd = (data) => {
    data = {
      ...data,
      type: "FOOD",
    };
    createCategorySaga.dispatch(data, menu.id);
  };

  const handleCategorySave = (data) => {
    data = {
      ...data,
      type: "FOOD",
    };
    editCategorySaga.dispatch(data, menu.id, chosenFoodCategory?.id);
  };

  const handleProductAdd = () => {
    setChosenFoodProduct(null);
    setFormContentLabel(PRODUCT_FORM_ADD);
    toggleDrawer("right", true);
  };

  const handleProductEdit = (product) => {
    setChosenFoodProduct(product);
    setFormContentLabel(PRODUCT_FORM_EDIT);
    toggleDrawer("right", true);
  };

  const handleProductDelete = (product) => {
    setChosenFoodProduct(product);
  };

  const handleProductSwitch = (productId) => {};

  const handleProductSave = async (data) => {
    const images =
      imgsPush &&
      imgsPush.length &&
      (await ImgUploader(imgsPush, true).then((res) => res));
    const editImage = imgsPush?.length ? { imagesToAdd: [...images] } : "";
    const deletedImages = deletedImg?.length
      ? { imagesToRemove: [...deletedImg] }
      : "";
    const uploadedArr = images ? images : [];
    let filteredImages = imgs?.filter((i) => i.thumbUrl);
    const allPhotos = [...filteredImages, ...uploadedArr];
    if (chosenFoodProduct) {
      data = {
        ...data,
        ...editImage,
        ...deletedImages,
        businessId: restaurant?.id,
      };
      editProductSaga.dispatch(data, chosenFoodProduct?.id, menu?.id);
    } else {
      data = {
        ...data,
        images: allPhotos,
        businessId: restaurant?.id,
      };
      createProductSaga.dispatch(data, menu?.id, foodCategory?.id, "FOOD");
    }
  };

  return (
    <>
      <StyledFoodTabItem>
        <CategoryCard
          categories={menu.food}
          handleCurrentCategory={handleCurrentCategory}
          currentCategory={foodCategory}
          loader={createCategorySaga.status.onLoad}
          handleCategoryAdd={createCategoryForm.handleSubmit(handleCategoryAdd)}
          register={createCategoryForm.register}
          handleCategoryEdit={handleCategoryEdit}
          handleCategoryDelete={handleCategoryDelete}
          handleCategorySwitch={handleCategorySwitch}
          noItemsText={"no menu categories yet"}
        />
        <ProductCard
          products={foodCategory?.items}
          currentCategory={foodCategory}
          handleProductAdd={handleProductAdd}
          handleProductEdit={handleProductEdit}
          handleProductDelete={handleProductDelete}
          handleProductSwitch={handleProductSwitch}
          selectText={"select category"}
          noItemsText={"no menu items yet"}
        />
      </StyledFoodTabItem>
      <StyledMenuDrawer
        anchor={"right"}
        open={drawerPosition.right}
        onClose={closeDrawer}
      >
        {formContentLabel === CATEGORY_FORM ? (
          <ItemFormCard
            formCardTitle={"Edit Category"}
            formCardLoader={editCategorySaga?.status?.onLoad}
            handleClose={closeDrawer}
            handleSubmitForm={editCategoryForm.handleSubmit(handleCategorySave)}
          >
            <CategoryFormContent
              chosenCategory={chosenFoodCategory}
              register={editCategoryForm.register}
            />
          </ItemFormCard>
        ) : formContentLabel === PRODUCT_FORM_ADD ||
          formContentLabel === PRODUCT_FORM_EDIT ? (
          <ItemFormCard
            formCardTitle={
              chosenFoodProduct ? "Edit Menu Item" : "Add Menu Items"
            }
            formCardLoader={
              createProductSaga?.status?.onLoad ||
              editProductSaga?.status?.onLoad
            }
            handleClose={closeDrawer}
            handleSubmitForm={submitProductForm.handleSubmit(handleProductSave)}
          >
            <ProductFormContent
              chosenProduct={chosenFoodProduct}
              register={submitProductForm.register}
              productImgs={imgs}
              productType={"food"}
              imgIdx={index}
              handleImgChange={handleFilesChange}
              handleImgRemove={handleFilesRemove}
              handleImgPreview={handlePreviewClick}
              error={error}
            />
          </ItemFormCard>
        ) : null}
      </StyledMenuDrawer>
    </>
  );
};
