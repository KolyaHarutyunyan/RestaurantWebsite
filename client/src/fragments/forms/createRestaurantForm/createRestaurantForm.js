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
import { useRouter } from "next/router";
import { useSagaStore, businessesActions } from "@eachbase/store";

export const CreateRestaurantForm = () => {
  const { register, handleSubmit } = useForm();
  const [restaurantIcon, setRestaurantIcon] = useState([]);
  const { close } = useModal();
  const { dispatch, status, destroy } = useSagaStore(
    businessesActions.createBusiness
  );
  const router = useRouter();

  const title =
    router.asPath === "/restaurant"
      ? "Create Restaurant"
      : "Last Step to Sign Up";

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
          {title}
        </Typography>
        <Input
          placeholder="Add your Restaurant Name"
          {...register("name", { required: true })}
        />
        <div>
          <Typography weight="bold" color="text">
            Optional
          </Typography>
          <Textarea
            placeholder="Add Brief Description"
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
