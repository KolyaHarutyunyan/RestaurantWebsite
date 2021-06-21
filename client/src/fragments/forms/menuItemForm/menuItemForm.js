import { Container } from "./style";
import {
  Typography,
  Input,
  Textarea,
  FileUpload,
  Button,
  useModal,
} from "@eachbase/components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSagaStore, itemActions } from "@eachbase/store";
import { useSelector } from "react-redux";

export const MenuItemForm = () => {
  const { params } = useModal();
  const { register, handleSubmit } = useForm();
  const [itemIcon, setItemIcon] = useState({
    files: [],
    mainImageId: "",
  });
  const businessId = useSelector(({ businesses }) =>
    businesses ? businesses.id : null
  );
  const createItemSaga = useSagaStore(itemActions.create);

  const onSubmit = (data) => {
    createItemSaga.dispatch(
      { ...data, businessId },
      params.categoryId,
      itemIcon
    );
  };

  return (
    <Container>
      <Typography className="title" color="text" weight="bold">
        Add Menu Item
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="box">
          <Input
            placeholder="Menu Item Name"
            {...register("name", { required: true })}
          />
          <Input
            type="number"
            placeholder="Price"
            {...register("price", { required: true })}
          />
        </div>
        <Textarea
          placeholder="Add Ingridients..."
          {...register("description", { required: true })}
        />
        <Input
          placeholder="Special Offers e.g. add chili sauce $2"
          {...register("option", { required: true })}
        />
        <FileUpload
          files={itemIcon.files}
          onChange={(files, _actionType, mainImageId) =>
            setItemIcon({ files, mainImageId })
          }
          limit={6}
          mainImageId={itemIcon.mainImageId}
        />
        <Button onLoad={createItemSaga.status.onLoad} type="submit" square>
          Add
        </Button>
      </form>
    </Container>
  );
};
