import {
  Typography,
  Input,
  Textarea,
  Button,
  FileUpload,
  useModal,
} from "@eachbase/components";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSagaStore, restaurantsActions } from "@eachbase/store";
import { useSelector } from "react-redux";

export const EditRestaurantForm = () => {
  const { register, handleSubmit } = useForm();

  const restaurant = useSelector(({ restaurants }) =>
    restaurants ? restaurants[0] : {}
  );
  const [restaurantIcon, setRestaurantIcon] = useState([]);
  const { close } = useModal();
  const { dispatch, status, destroy } = useSagaStore(
    restaurantsActions.createRestaurant
  );

  const onSubmit = (data) => {
    dispatch({ ...data, icon: restaurantIcon[0] || null });
  };

  useEffect(() => () => destroy.all(), []);

  useEffect(() => {
    if (status.onSuccess) {
      close();
      destroy.success();
      router.push("/restaurant");
    }
  }, [status]);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          className="title"
          weight="bold"
          color="text"
          size="1.250rem"
        >
          {restaurant.name}
        </Typography>
        <Input
          placeholder="Restaurant Name"
          defaultValue={restaurant.name}
          {...register("name", { required: true })}
        />
        <div>
          <Typography weight="bold" color="text">
            Optional
          </Typography>
          <Textarea
            placeholder="Brief Description"
            defaultValue={restaurant.description}
            rows={4}
            {...register("description", { required: true })}
          />
        </div>
        <FileUpload
          files={restaurantIcon}
          title="Restaurant Logo"
          onChange={(files) =>
            setRestaurantIcon(files.length ? [files[0]] : [])
          }
        />
        <Button type="submit" disabled={status.onLoad}>
          Save
        </Button>
      </form>
    </Container>
  );
};
