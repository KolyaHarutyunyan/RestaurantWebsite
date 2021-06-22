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
  const [selectedOption, setSelectedOption] = useState("menu");
  const deleteCategorySaga = useSagaStore(categoriesActions.delete);
  const deleteCategoryFromMenuSaga = useSagaStore(menuCategoriesActions.delete);
  const router = useRouter();

  useEffect(() => {
    if (
      deleteCategorySaga.status.onSuccess ||
      deleteCategoryFromMenuSaga.status.onSuccess
    ) {
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
      <Typography className="title" size="1.250rem" color="text" weight="bold">
        Delete a category {params.name}
      </Typography>
      <div className="options">
        <Radio
          onChange={() => setSelectedOption("restaurant")}
          name="restaurant"
          checked={selectedOption === "restaurant"}
          label="Delete from restaurant"
        />
        <Radio
          onChange={() => setSelectedOption("menu")}
          name="menu"
          checked={selectedOption === "menu"}
          label={`Delete from ${params.name} menu`}
        />
      </div>
      <div className="actions">
        <Button
          onLoad={
            deleteCategorySaga.status.onLoad ||
            deleteCategoryFromMenuSaga.status.onLoad
          }
          onClick={() => onDelete()}
        >
          Delete
        </Button>
        <Button onClick={() => close()}>Cancel</Button>
      </div>
    </Container>
  );
};
