import { Typography, Button, useModal, Radio } from "@eachbase/components";
import { useEffect, useState } from "react";
import { Container } from "./style";
import {
  useSagaStore,
  itemActions,
  categoryItemActions,
} from "@eachbase/store";

export const ConfirmItemDeleteDialog = () => {
  const { params, close } = useModal();
  const [selectedOption, setSelectedOption] = useState("category");

  const itemSaga = useSagaStore(itemActions.delete);
  const categoryItemSaga = useSagaStore(categoryItemActions.delete);

  useEffect(() => {
    if (itemSaga.status.onSuccess || categoryItemSaga.status.onSuccess) {
      itemSaga.destroy.all();
      categoryItemSaga.destroy.all();
      close();
    }
  }, [itemSaga, categoryItemSaga]);

  if (!Object.keys(params).length) {
    return null;
  }

  const onDelete = () => {
    if (selectedOption === "system") {
      itemSaga.dispatch(
        params.category.categoryId,
        params.categoryItem.item.id
      );
    } else {
      categoryItemSaga.dispatch(
        params.category.categoryId,
        params.categoryItem.item.id
      );
    }
  };

  if (!params.categoryItem || !params.category) {
    return null;
  }

  return (
    <Container>
      <Typography className="title" size="1.250rem" color="text" weight="bold">
        Delete a {params.categoryItem.item.name} item
      </Typography>
      <div className="options">
        <Radio
          onChange={() => setSelectedOption("category")}
          name="category"
          checked={selectedOption === "category"}
          label={`Delete '${params.categoryItem.item.name}' from category`}
        />
        <Radio
          onChange={() => setSelectedOption("system")}
          name="system"
          checked={selectedOption === "system"}
          label={`Delete '${params.categoryItem.item.name}' from  system`}
        />
      </div>
      <div className="actions">
        <Button
          onLoad={itemSaga.status.onLoad || categoryItemSaga.status.onLoad}
          onClick={() => onDelete()}
        >
          Delete
        </Button>
        <Button onClick={() => close()}>Cancel</Button>
      </div>
    </Container>
  );
};
