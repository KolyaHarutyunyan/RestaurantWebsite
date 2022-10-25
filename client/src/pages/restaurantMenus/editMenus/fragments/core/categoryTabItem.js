import { useState, useEffect } from "react";
import { StyledCategoryTabItem, StyledMenuDrawer } from "./style";
import { CategoryCard, ItemFormCard, ProductCard } from "@eachbase/components";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  categoriesActions,
  categoryItemActions,
  itemActions,
  useSagaStore,
} from "@eachbase/store";
import { CategoryFormContent, ProductFormContent } from "./common";
import {
  CATEGORY_FORM_ADD,
  CATEGORY_FORM_EDIT,
  initialCategoryState,
  initialProductState,
  PRODUCT_FORM_ADD,
  PRODUCT_FORM_EDIT,
} from "./constants";
import { ImgUploader, useFileUpload } from "@eachbase/utils";

export const CategoryTabItem = ({ categoryName = "", categoryType = "" }) => {
  const restaurant = useSelector(({ businesses }) => businesses);
  const menu = useSelector(({ menus }) => menus.menuById);
  const restaurantProducts = useSelector(({ items }) => items);

  const createCategorySaga = useSagaStore(categoriesActions.createCategory);
  const editCategorySaga = useSagaStore(categoriesActions.editCategory);
  const deleteCategorySaga = useSagaStore(categoriesActions.deleteCategory);
  const reorderCategoriesSaga = useSagaStore(categoriesActions.reorder);

  const createProductSaga = useSagaStore(itemActions.createProduct);
  const editProductSaga = useSagaStore(itemActions.editProduct);
  const deleteProductSaga = useSagaStore(itemActions.deleteProduct);

  const addProductsToCategorySaga = useSagaStore(categoryItemActions.add);
  const removeProductsFromCategorySaga = useSagaStore(
    categoryItemActions.delete
  );
  const reorderProductsSaga = useSagaStore(categoryItemActions.reorder);

  const [category, setCategory] = useState(null);
  const [chosenCategory, setChosenCategory] = useState(null);
  const [chosenProduct, setChosenProduct] = useState(null);
  const [drawerPosition, setDrawerPosition] = useState({ right: false });
  const [formContentLabel, setFormContentLabel] = useState("");
  const [images, setImages] = useState([]);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [imagesOnLoad, setImagesOnLoad] = useState(false);
  const [searchbarValue, setSearchbarValue] = useState("");

  const submitCategoryForm = useForm();
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
  } = useFileUpload(images, mainImageIndex);

  useEffect(() => {
    if (menu && category) {
      const currentCategory = menu[categoryName]?.find(
        (item) => item.id === category.id
      );
      setCategory(currentCategory);
    }
  }, [menu]);

  useEffect(() => {
    if (chosenCategory) {
      submitCategoryForm.reset(chosenCategory);
    } else {
      submitCategoryForm.reset(initialCategoryState);
    }
  }, [chosenCategory]);

  useEffect(() => {
    if (chosenProduct) {
      submitProductForm.reset(chosenProduct);
      setImages(chosenProduct.images);
      setMainImageIndex(chosenProduct.mainImage);
    } else {
      submitProductForm.reset(initialProductState);
      setImages(initialProductState.images);
      setMainImageIndex(initialProductState.mainImage);
    }
  }, [chosenProduct]);

  useEffect(() => {
    if (deleteCategorySaga?.status?.onSuccess) {
      deleteCategorySaga?.destroy?.success();
      if (category?.id === chosenCategory?.id) {
        setCategory(null);
      }
    }
  }, [deleteCategorySaga?.status]);

  useEffect(() => {
    if (createCategorySaga?.status?.onSuccess) {
      closeDrawer();
      createCategorySaga?.destroy?.success();
    } else if (editCategorySaga?.status?.onSuccess) {
      closeDrawer();
      editCategorySaga?.destroy?.success();
    } else if (createProductSaga?.status?.onSuccess) {
      closeDrawer();
      createProductSaga?.destroy?.success();
    } else if (editProductSaga?.status?.onSuccess) {
      closeDrawer();
      editProductSaga?.destroy?.success();
    }
  }, [
    createCategorySaga?.status,
    editCategorySaga?.status,
    createProductSaga?.status,
    editProductSaga?.status,
  ]);

  const toggleDrawer = (anchor, open) => {
    setDrawerPosition({ ...drawerPosition, [anchor]: open });
  };

  const closeDrawer = () => {
    toggleDrawer("right", false);
  };

  const handleCurrentCategory = (category) => {
    setCategory(category);
    submitProductForm.reset(initialProductState);
    setImages(initialProductState.images);
    setMainImageIndex(initialProductState.mainImage);
  };
  const handleCategoryAdd = () => {
    submitCategoryForm.reset(initialCategoryState);
    setChosenCategory(null);
    setFormContentLabel(CATEGORY_FORM_ADD);
    toggleDrawer("right", true);
  };

  const handleCategoryEdit = (category) => {
    setChosenCategory(category);
    setFormContentLabel(CATEGORY_FORM_EDIT);
    toggleDrawer("right", true);
  };

  const handleCategoryDelete = (category) => {
    setChosenCategory(category);
    deleteCategorySaga.dispatch(menu.id, category.id, categoryType);
  };

  const handleCategorySwitch = (category) => {
    category = {
      ...category,
      type: categoryType,
      active: !category.active,
    };
    editCategorySaga.dispatch(category, menu.id, category.id);
  };

  const handleCategorySave = (data) => {
    data = {
      ...data,
      type: categoryType,
      active: true,
    };
    if (chosenCategory) {
      editCategorySaga.dispatch(data, menu.id, chosenCategory?.id);
    } else {
      createCategorySaga.dispatch(data, menu.id);
    }
  };

  const handleCategoriesReorder = (e) => {
    const from = e.source.index;
    const to = e.destination ? e.destination.index : null;
    reorderCategoriesSaga.dispatch(menu?.id, categoryType, {
      from,
      to,
    });
  };

  const handleProductAdd = () => {
    setChosenProduct(null);
    setFormContentLabel(PRODUCT_FORM_ADD);
    toggleDrawer("right", true);
  };

  const handleProductEdit = (product) => {
    setChosenProduct(product);
    setFormContentLabel(PRODUCT_FORM_EDIT);
    toggleDrawer("right", true);
  };

  const handleProductDelete = (product) => {
    setChosenProduct(product);
    deleteProductSaga.dispatch(product.id, menu?.id);
  };

  const handleProductSwitch = (product) => {
    product = {
      ...product,
      businessId: restaurant?.id,
      active: !product.active,
    };
    editProductSaga.dispatch(product, product.id, menu?.id);
  };

  const handleProductSave = async (data) => {
    let images = [];
    if (imgsPush && imgsPush.length) {
      setImagesOnLoad(true);
      images = await ImgUploader(imgsPush, true).then((res) => {
        setImagesOnLoad(false);
        return res;
      });
    }
    const imagesToAdd = imgsPush?.length ? { imagesToAdd: [...images] } : "";
    const imagesToRemove = deletedImg?.length
      ? { imagesToRemove: [...deletedImg] }
      : "";
    const uploadedArr = images ? images : [];
    let filteredImages = imgs?.filter((i) => i.thumbUrl);
    const allPhotos = [...filteredImages, ...uploadedArr];
    data = {
      ...data,
      mainImage: index,
      businessId: restaurant?.id,
    };
    if (chosenProduct) {
      data = {
        ...data,
        ...imagesToAdd,
        ...imagesToRemove,
      };
      editProductSaga.dispatch(data, chosenProduct?.id, menu?.id);
    } else {
      data = {
        ...data,
        images: allPhotos,
      };
      createProductSaga.dispatch(data, menu?.id, category?.id, categoryType);
    }
  };

  const handleProductsChange = (_options, newItem, removedItem) => {
    if (newItem.length) {
      addProductsToCategorySaga.dispatch(
        menu?.id,
        category?.id,
        newItem[newItem.length - 1].value,
        categoryType
      );
    }
    if (removedItem) {
      removeProductsFromCategorySaga.dispatch(category?.id, removedItem.value);
    }
  };

  const handleProductsReorder = (e) => {
    const from = e.source.index;
    const to = e.destination ? e.destination.index : null;
    reorderProductsSaga.dispatch(menu?.id, category?.id, categoryType, {
      from,
      to,
    });
  };

  const multiProductsList = restaurantProducts?.map((product) => ({
    label: product.name,
    value: product.id,
  }));

  const categoryItemOptions = category?.items?.map((product) => ({
    label: product.item.name,
    value: product.item.id,
  }));

  const selectedOptions = categoryItemOptions?.filter(
    (i) => !!multiProductsList.find((cItem) => cItem.value === i.value)
  );

  return (
    <>
      <StyledCategoryTabItem>
        <CategoryCard
          categories={menu?.[categoryName]}
          handleCurrentCategory={handleCurrentCategory}
          currentCategory={category}
          handleCategoryAdd={handleCategoryAdd}
          handleCategoryEdit={handleCategoryEdit}
          handleCategoryDelete={handleCategoryDelete}
          handleCategorySwitch={handleCategorySwitch}
          noItemsText={"no menu categories yet"}
          onDragCategory={handleCategoriesReorder}
        />
        <ProductCard
          products={category?.items}
          currentCategory={category}
          handleProductAdd={handleProductAdd}
          handleProductEdit={handleProductEdit}
          handleProductDelete={handleProductDelete}
          handleProductSwitch={handleProductSwitch}
          selectText={"select category"}
          noItemsText={"no menu items yet"}
          multiProductsList={multiProductsList}
          categoryType={categoryType}
          searchbarValue={searchbarValue}
          selected={selectedOptions}
          onChange={(values, newValue, removedValue) =>
            handleProductsChange(values, newValue, removedValue)
          }
          onSearchbarValueChange={(value) => setSearchbarValue(value)}
          onDragProduct={handleProductsReorder}
        />
      </StyledCategoryTabItem>
      <StyledMenuDrawer
        anchor={"right"}
        open={drawerPosition.right}
        onClose={closeDrawer}
      >
        {formContentLabel === CATEGORY_FORM_ADD ||
        formContentLabel === CATEGORY_FORM_EDIT ? (
          <ItemFormCard
            formCardTitle={chosenCategory ? "Edit Category" : "Add Category"}
            formCardLoader={
              createCategorySaga.status.onLoad ||
              editCategorySaga?.status?.onLoad
            }
            handleClose={closeDrawer}
            handleSubmitForm={submitCategoryForm.handleSubmit(
              handleCategorySave
            )}
          >
            <CategoryFormContent
              chosenCategory={chosenCategory}
              register={submitCategoryForm.register}
            />
          </ItemFormCard>
        ) : formContentLabel === PRODUCT_FORM_ADD ||
          formContentLabel === PRODUCT_FORM_EDIT ? (
          <ItemFormCard
            formCardTitle={chosenProduct ? "Edit Menu Item" : "Add Menu Items"}
            formCardLoader={
              createProductSaga?.status?.onLoad ||
              editProductSaga?.status?.onLoad ||
              imagesOnLoad
            }
            handleClose={closeDrawer}
            handleSubmitForm={submitProductForm.handleSubmit(handleProductSave)}
          >
            <ProductFormContent
              chosenProduct={chosenProduct}
              register={submitProductForm.register}
              productImgs={imgs}
              productType={categoryType}
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
