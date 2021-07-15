import { Container } from "./style";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSagaStore, menusActions, imageService } from "@eachbase/store";
import {
  useModal,
  Typography,
  Input,
  FileUpload,
  Textarea,
  Button,
  BoxImagePreview,
} from "@eachbase/components";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export const MenuForm = () => {
  const { register, handleSubmit, setValue, reset } = useForm({});
  const { close, params } = useModal();
  const router = useRouter();
  const [restaurantIcons, setRestaurantIcons] = useState({
    mainIconId: null,
    files: [],
  });
  const [imagesLimit, setImagesLimit] = useState(1);
  const createMenuSaga = useSagaStore(menusActions.createMenu);
  const editMenuSaga = useSagaStore(menusActions.editMenu);

  const business = useSelector(({ businesses }) => businesses);
  const editableMenu = useSelector(({ menus }) =>
    params.menuId ? menus.find((menu) => menu.id === params.menuId) : null
  );

  useEffect(() => {
    if (createMenuSaga.status.onSuccess) {
      createMenuSaga.destroy.all();
      reset();
      close();
      router.push("/restaurant");
      setRestaurantIcons({
        mainIconId: null,
        files: [],
      });
    }
    if (editMenuSaga.status.onSuccess) {
      editMenuSaga.destroy.all();
      reset();
      close();
      setRestaurantIcons({
        mainIconId: null,
        files: [],
      });
      close();
    }
  }, [createMenuSaga.status, editMenuSaga.status]);

  useEffect(() => {
    if (editableMenu) {
      setValue("name", editableMenu.name);
      setValue("description", editableMenu.description);
      if (editableMenu.image) {
        setImagesLimit(0);
      }
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
        >
          {editableMenu ? "Edit Menu" : "Create New Menu"}
        </Typography>
        <Input
            padding={'8px'}
            containerClassName='input-padding'
          placeholder="Menu Name"
          {...register("name", { required: true })}
        />
        <div>
          <Typography className='input-padding' weight="bold" color="text">
            Optional
          </Typography>
          <Textarea
              max={500}
              padding={'8px'}
              containerClassName='input-padding'
            placeholder="Brief Description"
            rows={4}
            {...register("description", { required: true })}
          />
          <Typography className='max-characters'  color="text">
            Max 500 characters
          </Typography>

        </div>
        <FileUpload
          files={restaurantIcons.files}
          title="Menu Logo"
          limit={imagesLimit}
          mainImageId={restaurantIcons.mainIconId}
          onChange={(files, _actionType, mainIconId) =>
            setRestaurantIcons({ files, mainIconId })
          }
        />

        {editableMenu && editableMenu.image ? (
          <div className="uploaded">
            <Typography color="action" weight="bold">
              Uploaded Images
            </Typography>
            <BoxImagePreview
              url={editableMenu.image.originalUrl}
              onRequestToRemove={() => {
                if (
                  window.confirm("Are you sure?, you cant revert this action")
                ) {
                  imageService.removeImage([editableMenu.image.id]);
                  setImagesLimit(1);
                }
              }}
            />
          </div>
        ) : null}

        <Button
            square
            className='save-button'
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
