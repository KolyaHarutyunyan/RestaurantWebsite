import { useEffect, useState } from "react";
import { Typography, Button, useModal, Radio } from "@eachbase/components";
import { Container } from "./style";
import {
  useSagaStore,
  itemActions,
  categoryItemActions,
} from "@eachbase/store";
import { getLimitedVal } from "@eachbase/utils";

export const ConfirmItemDeleteDialog = () => {
  const { params, close } = useModal();
  const [selectedOption, setSelectedOption] = useState("category");

  const itemSaga = useSagaStore(itemActions.deleteProduct);
  const categoryItemSaga = useSagaStore(categoryItemActions.delete);

  useEffect(() => {
    if (itemSaga.status.onSuccess || categoryItemSaga.status.onSuccess) {
      itemSaga.destroy.success();
      categoryItemSaga.destroy.success();
      close();
      return;
    }
    if (itemSaga.status.onError || categoryItemSaga.status.onError) {
      itemSaga.destroy.error();
      categoryItemSaga.destroy.error();
      close();
      return;
    }
  }, [itemSaga, categoryItemSaga]);

  const onDelete = () => {
    if (selectedOption === "system") {
      itemSaga.dispatch(params?.categoryItem?.id, params.menuId);
    } else {
      categoryItemSaga.dispatch(
        params.menuId,
        params.categoryId,
        params?.categoryItem?.id,
        params.type
      );
    }
  };

  return (
    <Container>
      <Typography className="title" size="1.250rem" color="text" weight="bold">
        Delete a {params?.categoryItem?.name}
      </Typography>
      <div className="options">
        <Radio
          onChange={() => setSelectedOption("category")}
          name="category"
          checked={selectedOption === "category"}
          label={
            <>
              Delete from
              <em>{getLimitedVal(params?.currentCategory?.name)}</em> category
            </>
          }
        />
        <Radio
          onChange={() => setSelectedOption("system")}
          name="system"
          checked={selectedOption === "system"}
          label={`Delete from all categories`}
        />
      </div>
      <div className="actions">
        <Button
          fullWidth
          maxWidth={"181px"}
          onLoad={itemSaga.status.onLoad || categoryItemSaga.status.onLoad}
          onClick={() => onDelete()}
        >
          Delete
        </Button>
        <Button fullWidth maxWidth={"181px"} onClick={() => close()}>
          Cancel
        </Button>
      </div>
    </Container>
  );
};
