import { Container } from "./style";
import {
  Typography,
  Input,
  Textarea,
  FileUpload,
  Button,
  useModal,
} from "@eachbase/components";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSagaStore, itemActions } from "@eachbase/store";
import { useSelector } from "react-redux";

export const MenuItemForm = () => {
  const { params, close } = useModal();
  const { register, handleSubmit, setValue, reset } = useForm();
  const [itemIcon, setItemIcon] = useState({
    files: [],
    mainImageId: "",
  });
  const businessId = useSelector(({ businesses }) =>
    businesses ? businesses.id : null
  );
  const createItemSaga = useSagaStore(itemActions.create);
  const editItemSaga = useSagaStore(itemActions.update);

  useEffect(() => {
    if (createItemSaga.status.onSuccess) {
      createItemSaga.destroy.all();
      setItemIcon({
        files: [],
        mainImageId: "",
      });
      reset();
      close();
    }
    if (editItemSaga.status.onSuccess) {
      editItemSaga.destroy.all();
      reset();
      close();
    }
  }, [createItemSaga, editItemSaga]);

  const formStatus = params.categoryItem && params.category ? "edit" : "create";
  const onSubmit = (data) => {
    if (formStatus === "create") {
      createItemSaga.dispatch(
        { ...data, businessId },
        params.categoryId,
        itemIcon
      );
    } else {
      editItemSaga.dispatch(
        { ...params.categoryItem.item, ...data, businessId },
        params.categoryId,
        itemIcon
      );
    }
  };

  useEffect(() => {
    if (params.categoryItem) {
      setValue("name", params.categoryItem.item["name"]);
      setValue("price", params.categoryItem.item["price"]);
      setValue("description", params.categoryItem.item["description"]);
      setValue("option", params.categoryItem.item["option"]);
    }
  }, [params]);

  return (
    <Container>
      <Typography className="title" color="text" weight="bold">
        {formStatus === "edit" ? "Edit Menu Item" : "Add Menu Item"}
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
        <Button
          onLoad={createItemSaga.status.onLoad || editItemSaga.status.onLoad}
          type="submit"
          square
        >
          {formStatus === "edit" ? "Edit" : "Add"}
        </Button>
      </form>
    </Container>
  );
};
