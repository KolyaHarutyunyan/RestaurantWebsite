import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  Typography,
  Input,
  Textarea,
  Button,
  FileUpload,
  useModal
} from "@eachbase/components";
import { ImgUploader } from "@eachbase/utils";
import { useSagaStore, businessesActions } from "@eachbase/store";
import { Container } from "./style";

export const CreateRestaurantForm = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const [img, setImg] = useState("");
  const [imgPush, setImgPush] = useState("");
  const [error, setError] = useState("");
  const { close } = useModal();
  const { dispatch, status, destroy } = useSagaStore(businessesActions.createBusiness);
  const title =
    router.asPath === "/restaurant"
      ? "Create Restaurant"
      : "Last Step to Sign Up";

  useEffect(() => () => destroy.all(), []);

  useEffect(() => {
    if (status.onSuccess) {
      close();
      destroy.all();
      reset();
      window.location.replace('/plansAndPricing')
      // window.location.replace('/menus')
    }
  }, [status]);


  const onSubmit = async (data) => {
    const images = imgPush && await ImgUploader([imgPush]).then(res => res);
    const info = { ...data };
    images ? info.logo = images : "";

    if (data.name.length >= 2) {
      dispatch(info);
    } else {
      setError("name");
    }

  };


  const handleFileChange = (e) => {
    for (let item of e) {
      if (item && item.size > 2097152) {
        setError('bigSize');
      } else {
        setError("");
        setImg({
          url: URL.createObjectURL(new File([item], "image", { type: "text/json;charset=utf-8" })),
          id: 1
        });
        setImgPush(new File([item], `img1`));
      }
    }
  };

  const handleRemoveImage = () => {
    setImg("");
    setImgPush("");
  };

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
          <Typography className="input-padding" weight="bold" color="text">
            Restaurant Name
          </Typography>
          <Input
            error={error === "name"}
            helper={error === "name" && 'Restaurant name min length must be 2 characters'}
            max={50}
            padding={"8px"}
            placeholder="Add your Restaurant Name"
            {...register("name", { required: true })}
          />
        </div>
        <div>
          <Typography className="input-padding" weight="bold" color="text">
            Description
          </Typography>
          <Textarea
            containerClassName="input-padding"
            max={500}
            padding={"10px"}
            placeholder="Add Brief Description"
            rows={4}
            {...register("description", { required: false })}
          />
          <Typography className="max-characters" color="text">
            Max 500 characters
          </Typography>
        </div>
        <FileUpload
          error={error === 'bigSize'}
          building={true}
          title="Restaurant Logo"
          handleChange={handleFileChange}
          url={img ? img : ""}
          handleRemove={handleRemoveImage}
        />
        <Button className="save-button" square type="submit" onLoad={status.onLoad}>
          Save
        </Button>
      </form>
    </Container>
  );
};
