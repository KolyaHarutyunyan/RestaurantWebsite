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
  const { register, handleSubmit, reset } = useForm();
  const [restaurantIcon, setRestaurantIcon] = useState(null);
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
    dispatch(data, restaurantIcon);
  };

  useEffect(() => () => destroy.all(), []);
  useEffect(() => {
    if (status.onSuccess) {
      close();
      destroy.all();
      reset();
      setRestaurantIcon(null);
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
          files={restaurantIcon ? [restaurantIcon] : []}
          title="Restaurant Logo"
          limit={1}
          onChange={(files) =>
            setRestaurantIcon(files.length ? files[0] : null)
          }
        />
        <Button type="submit" onLoad={status.onLoad}>
          Save
        </Button>
      </form>
    </Container>
  );
};