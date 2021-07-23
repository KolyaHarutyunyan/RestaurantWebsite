import {
  Typography,
  Input,
  Textarea,
  Button,
  FileUpload,
  useModal,
  BoxImagePreview,
} from "@eachbase/components";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import {useSagaStore, businessesActions, imageService, menusActions} from "@eachbase/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export const EditRestaurantForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const router = useRouter();
  const business = useSelector(({ businesses }) => businesses || {});
  const editBusiness = useSagaStore(businessesActions.editBusiness);

  const [restaurantIconsLimit, setRestaurantIconsLimit] = useState(1);
  const [restaurantIcon, setRestaurantIcon] = useState({
    files: [],
    mainImageId: "",
  });

  const { close } = useModal();
  const { dispatch, status, destroy } = useSagaStore(
    businessesActions.editBusiness
  );

  useEffect(() => {
    if (business.logo) {
      setRestaurantIconsLimit(0);
    }
  }, [business]);
  const onSubmit = (info) => {
    restaurantIcon.mainImageId ?
        editBusiness.dispatch({
          ...info,
          id: business.id,
          logo: restaurantIcon,
        })
        :
    editBusiness.dispatch({
      ...info,
      id: business.id,
    })
  };


  useEffect(() => () => destroy.all(), []);

  useEffect(() => {
    if (status.onSuccess) {
      close();
      destroy.success();
      reset();
      setRestaurantIcon({
        files: [],
        mainImageId: "",
      });
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
          restaurantIconsLimit
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
          Edit {business.name}
        </Typography>
        <Input
            containerClassName='input-padding'
            padding={'8px'}
            placeholder="Restaurant Name"
            defaultValue={business.name ? business.name :'' }
            {...register("name", { required:!business.name })}
        />
        <div>
          <Typography  className='input-padding' weight="bold" color="text">
            Optional
          </Typography>
          <Textarea
              max={500}
              containerClassName='input-padding'
              padding={'10px'}
              placeholder="Brief Description"
              defaultValue={business.description ? business.description : ''}
              rows={4}
              {...register("description", { required: !business.description })}
          />
          <Typography className='max-characters'  color="text">
            Max 500 characters
          </Typography>
        </div>
        <FileUpload
          files={restaurantIcon.files}
          mainImageId={restaurantIcon.mainImageId}
          limit={restaurantIconsLimit}
          // mainImageId={restaurantIcon.mainImageId}
          onChange={(files, actionType, mainImageId) =>
            onFileUploadChange(files, actionType, mainImageId)
          }
        />
        {business.logo ? (
          <div className="uploaded">
            <Typography color="action" weight="bold">
              Uploaded images
            </Typography>
            <BoxImagePreview
              main
              url={business.logo.originalUrl}
              onRequestToRemove={() => {
                if (
                  window.confirm("Are you sure? this action cannot be reverted")
                ) {
                  imageService.removeImage([business.logo.id]);
                }
              }}
            />
          </div>
        ) : null}
        <Button
            className='save-button'
            square
            type="submit"
            onLoad={status.onLoad}
        >
          Save
        </Button>
      </form>
    </Container>
  );
};
