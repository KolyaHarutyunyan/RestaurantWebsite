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
import { useSagaStore, businessesActions } from "@eachbase/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const RESTAURANT_ICONS_LIMIT = 6;
export const EditRestaurantForm = () => {
  const { register, handleSubmit } = useForm();

  const router = useRouter();
  const business = useSelector(({ businesses }) => businesses || {});
  const [restaurantIcon, setRestaurantIcon] = useState({
    files: [],
    mainImageId: "",
  });
  const { close } = useModal();
  const { dispatch, status, destroy } = useSagaStore(
    businessesActions.createBusiness
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

  const onFileUploadChange = (files, actionType, mainImageId) => {
    if (actionType === "UPLOAD") {
      const filteredFiles = files.filter((cFile) => {
        const isIn = !!restaurantIcon.files.find(
          (file) => file.id !== cFile.id
        );

        return !isIn;
      });
      setRestaurantIcon((cRestaurantIcon) => {
        if (
          cRestaurantIcon.files.length + filteredFiles.length <=
          RESTAURANT_ICONS_LIMIT
        ) {
          return {
            files: [...filteredFiles, ...cRestaurantIcon.files],
            mainImageId,
          };
        }
        return cRestaurantIcon;
      });
    } else {
      setRestaurantIcon({ files, mainImageId });
    }
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
          {business.name}
        </Typography>
        <Input
          placeholder="Restaurant Name"
          defaultValue={business.name}
          {...register("name", { required: true })}
        />
        <div>
          <Typography weight="bold" color="text">
            Optional
          </Typography>
          <Textarea
            placeholder="Brief Description"
            defaultValue={business.description}
            rows={4}
            {...register("description", { required: true })}
          />
        </div>
        <FileUpload
          files={restaurantIcon.files}
          mainImageId={restaurantIcon.mainImageId}
          limit={RESTAURANT_ICONS_LIMIT}
          title="Restaurant Logo"
          onChange={(files, actionType, mainImageId) =>
            onFileUploadChange(files, actionType, mainImageId)
          }
        />
        <Button type="submit" onLoad={status.onLoad}>
          Save
        </Button>
      </form>
    </Container>
  );
};
