import { Container } from "./style";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSagaStore, menusActions } from "@eachbase/store";
import {
  useModal,
  Typography,
  Input,
  FileUpload,
  Textarea,
  Button,
} from "@eachbase/components";
import { useSelector } from "react-redux";

export const MenuForm = () => {
  const { register, handleSubmit, setValue } = useForm({});
  const { close, params } = useModal();
  const [restaurantIcons, setRestaurantIcons] = useState({
    mainIconId: null,
    files: [],
  });
  const createMenuSaga = useSagaStore(menusActions.createMenu);
  const editMenuSaga = useSagaStore(menusActions.editMenu);

  const business = useSelector(({ businesses }) => businesses);
  const editableMenu = useSelector(({ menus }) =>
    params.menuId ? menus.find((menu) => menu.id === params.menuId) : null
  );

  useEffect(() => {
    if (createMenuSaga.status.onSuccess) {
      close();
      createMenuSaga.destroy.success();
    }
    if (editMenuSaga.status.onSuccess) {
      close();
      editMenuSaga.destroy.success();
    }
  }, [createMenuSaga.destroy, editMenuSaga]);

  useEffect(() => {
    if (editableMenu) {
      setValue("name", editableMenu.name);
      setValue("description", editableMenu.description);
    }
  }, [editableMenu]);

  useEffect(
    () => () => {
      createMenuSaga.destroy.all();
      editMenuSaga.destroy.all();
    },
    []
  );

  const onSubmit = (data) => {
    editableMenu
      ? editMenuSaga.dispatch({
          ...data,
          id: editableMenu.id,
          businessId: business.id,
          restaurantIcons,
        })
      : createMenuSaga.dispatch({
          ...data,
          businessId: business.id,
          restaurantIcons,
        });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          className="title"
          weight="bold"
          color="text"
          size="1.250rem"
        >
          {editableMenu ? "Edit Menu" : "Create New Menu"}
        </Typography>
        <Input
          placeholder="Menu Name"
          {...register("name", { required: true })}
        />
        <div>
          <Typography weight="bold" color="text">
            Optional
          </Typography>
          <Textarea
            placeholder="Brief Description"
            rows={4}
            {...register("description", { required: true })}
          />
        </div>
        <FileUpload
          files={restaurantIcons.files}
          title="Menu Logo"
          limit={6}
          mainImageId={restaurantIcons.mainIconId}
          onChange={(files, actionType, mainIconId) =>
            setRestaurantIcons({ files, mainIconId })
          }
        />
        <Button
          type="submit"
          onLoad={createMenuSaga.status.onLoad || editMenuSaga.status.onLoad}
          disabled={createMenuSaga.status.onLoad}
        >
          Save
        </Button>
      </form>
    </Container>
  );
};
