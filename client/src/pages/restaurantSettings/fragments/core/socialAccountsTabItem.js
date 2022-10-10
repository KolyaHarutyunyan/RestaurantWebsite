import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserInput, SaveOrCancelButton } from "@eachbase/components";
import { StyledSocialAccountsTabItem } from "./style";
import { businessesActions, useSagaStore } from "@eachbase/store";
import { useSelector } from "react-redux";
import Router from "next/router";

export const SocialAccountsTabItem = () => {
  const restaurant = useSelector((state) => state.businesses);

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
      id: restaurant.id,
      website: data.website || restaurant.website,
      facebook: data.facebook || restaurant.facebook,
      instagram: data.instagram || restaurant.instagram,
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
          defaultValue={restaurant.website}
          {...register("website")}
        />
        <UserInput
          required={false}
          inputLabel={"Facebook"}
          inputType={"text"}
          inputName={"facebook"}
          defaultValue={restaurant.facebook}
          {...register("facebook")}
        />
        <UserInput
          required={false}
          inputLabel={"Instagram"}
          inputType={"text"}
          inputName={"instagram"}
          defaultValue={restaurant.instagram}
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
