import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  UserInput,
  MyButton,
  Button,
  SaveOrCancelButton,
} from "@eachbase/components";
import { StyledFormActionsBox, StyledSocialAccountsTabItem } from "./style";
import { businessesActions, useSagaStore } from "@eachbase/store";
import { useSelector } from "react-redux";
import Router from "next/router";

export const SocialAccountsTabItem = () => {
  const restaurant = useSelector(({ businesses }) => businesses);

  const [inputs, setInputs] = useState(restaurant ? { ...restaurant } : {});

  const { register, handleSubmit, reset } = useForm();

  const { dispatch, status, destroy } = useSagaStore(
    businessesActions.editBusiness
  );

  useEffect(() => () => destroy.all(), []);

  useEffect(() => {
    if (status.onSuccess) {
      destroy.success();
      reset();
      Router.push("/restaurant");
    }
  }, [status]);

  const onSubmit = (data) => {
    data = {
      id: restaurant?.id,
      website: inputs.website,
      facebook: inputs.facebook,
      instagram: inputs.instagram,
    };
    dispatch(data);
  };

  return (
    <StyledSocialAccountsTabItem>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserInput
          required={false}
          inputLabel={"Website"}
          inputType={"text"}
          inputName={"website"}
          inputValue={inputs.website}
          onInputChange={(e) =>
            setInputs({ ...inputs, website: e.target.value })
          }
          {...register("website")}
        />
        <UserInput
          required={false}
          inputLabel={"Facebook"}
          inputType={"text"}
          inputName={"facebook"}
          inputValue={inputs.facebook}
          onInputChange={(e) =>
            setInputs({ ...inputs, facebook: e.target.value })
          }
          {...register("facebook")}
        />
        <UserInput
          required={false}
          inputLabel={"Instagram"}
          inputType={"text"}
          inputName={"instagram"}
          inputValue={inputs.instagram}
          onInputChange={(e) =>
            setInputs({ ...inputs, instagram: e.target.value })
          }
          {...register("instagram")}
        />
        <SaveOrCancelButton
          onCancel={(e) => {
            e.preventDefault();
            alert("Cancelled");
          }}
          onLoad={status.onLoad}
        />
      </form>
    </StyledSocialAccountsTabItem>
  );
};
