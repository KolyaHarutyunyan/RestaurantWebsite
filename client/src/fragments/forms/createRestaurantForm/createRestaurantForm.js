import {
  Typography,
  Input,
  Textarea,
  Button,
  FileUpload,
} from "@eachbase/components";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import { useState } from "react";
export const CreateRestaurantForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [restaurantIcon, setRestaurantIcon] = useState([]);

  return (
    <Container>
      <Typography className="title" weight="bold" color="text" size="1.250rem">
        Last Step to Sign Up
      </Typography>
      <Input placeholder="Add your Restaurant Name" {...register("name")} />
      <div>
        <Typography weight="bold" color="text">
          Optional
        </Typography>
        <Textarea
          placeholder="Add Brief Description"
          rows={4}
          {...register("description")}
        />
      </div>
      <FileUpload
        files={restaurantIcon}
        title="Restaurant Logo"
        onChange={(files) => setRestaurantIcon(files)}
      />
      <Button>Save</Button>
    </Container>
  );
};
