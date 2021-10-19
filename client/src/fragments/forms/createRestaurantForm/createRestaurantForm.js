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
        >
          {title}
        </Typography>

        <div>
        <Typography className='input-padding' weight="bold" color="text">
          Restaurant Name
        </Typography>
        <Input
            padding={'8px'}
          placeholder="Add your Restaurant Name"
          {...register("name", { required: true })}
        />
        </div>
        <div>
          <Typography className='input-padding' weight="bold" color="text">
            Description
          </Typography>
          <Textarea
              containerClassName='input-padding'
              max={500}
              padding={'10px'}
            placeholder="Add Brief Description"
            rows={4}
            {...register("description", { required: false })}
          />
          <Typography className='max-characters'  color="text">
            Max 500 characters
          </Typography>
        </div>
        <FileUpload
          building={true}
          files={restaurantIcon ? [restaurantIcon] : []}
          title="Restaurant Logo"
          limit={1}
          onChange={(files) =>
            setRestaurantIcon(files.length ? files[0] : null)
          }
        />
        <Button className='save-button' square type="submit" onLoad={status.onLoad}>
          Save
        </Button>
      </form>
    </Container>
  );
};
