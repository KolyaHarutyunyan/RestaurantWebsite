import { Typography, Button, useModal, Radio } from "@eachbase/components";
import { useEffect, useState } from "react";
import { Container } from "./style";
import {
  useSagaStore,
  categoriesActions,
  menuCategoriesActions,
} from "@eachbase/store";
import { useRouter } from "next/router";

export const ConfirmCategoryDeleteDialog = () => {
  const { params, close } = useModal();
  const [selectedOption, setSelectedOption] = useState("restaurant");
  const deleteCategorySaga = useSagaStore(categoriesActions.delete);
  const deleteCategoryFromMenuSaga = useSagaStore(menuCategoriesActions.delete);
  const router = useRouter();

  useEffect(() => {
    if (deleteCategorySaga.status.onSuccess || deleteCategoryFromMenuSaga.status.onSuccess) {
      deleteCategorySaga.destroy.all();
      deleteCategoryFromMenuSaga.destroy.all();
      close();
    }
  }, [deleteCategorySaga, deleteCategoryFromMenuSaga]);

  if (!Object.keys(params).length) {
    return null;
  }

  const onDelete = () => {
    if (selectedOption === "menu") {
      deleteCategoryFromMenuSaga.dispatch(
        router.query.menuId,
        params.id,
        params.categoryType
      );
    } else {
      deleteCategorySaga.dispatch(
        router.query.menuId,
        params.id,
        params.categoryType
      );
    }
  };

  return (
    <Container>
      <Typography className="title" color="text" weight="bold">
        Are You Sure?

      </Typography>

      <p style={{fontSize:'16px'}}>Yoy wont Delete a Menu {params.name} </p>
      <div className="options">
        {/*<Radio*/}
        {/*    onChange={() => setSelectedOption("menu")}*/}
        {/*    name="menu"*/}
        {/*    checked={selectedOption === "menu"}*/}
        {/*    label={<div>Delete from <span className='category-name'>{params.name}</span> menu</div>}*/}
        {/*/>*/}
        {/*<Radio*/}
        {/*  onChange={() => setSelectedOption("restaurant")}*/}
        {/*  name="restaurant"*/}
        {/*  checked={selectedOption === "restaurant"}*/}
        {/*  label="Delete from restaurant"*/}
        {/*/>*/}
      </div>
      <div className="actions">
        <Button
            minWidth={ typeof window !== 'undefined' && window.innerWidth > 1279 ? '170px' : '140px'}
            classname='button-class'
            onLoad={
            deleteCategorySaga.status.onLoad ||
            deleteCategoryFromMenuSaga.status.onLoad
          }
          onClick={() => onDelete()}
        >
          Delete
        </Button>
        <Button
            minWidth={ typeof window !== 'undefined' && window.innerWidth > 1279 ? '170px' : '140px'}
                   classname='button-class' onClick={() => close()}>Cancel</Button>
      </div>
    </Container>
  );
};
