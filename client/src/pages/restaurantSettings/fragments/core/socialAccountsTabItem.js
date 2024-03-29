import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserInput, SaveOrCancelButton } from "@eachbase/components";
import { StyledSocialAccountsTabItem } from "./style";
import { businessesActions, useSagaStore } from "@eachbase/store";
import { useSelector } from "react-redux";
import { handleOptionalField } from "@eachbase/utils";

export const SocialAccountsTabItem = () => {
  const restaurant = useSelector((state) => state.businesses);

  const { register, handleSubmit, reset } = useForm();

  const { dispatch, status, destroy } = useSagaStore(
    businessesActions.editBusiness
  );

  useEffect(() => {
    if (status.onSuccess) {
      destroy.success();
    }
  }, [status]);

  const onSubmit = (data) => {
    data = {
      ...handleOptionalField(data),
      id: restaurant.id,
    };
    dispatch(data);
  };

  const onCancel = (e) => {
    e.preventDefault();
    reset(restaurant);
  };

  return (
    <StyledSocialAccountsTabItem>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserInput
          required={false}
          inputLabel={"Website"}
          inputType={"url"}
          inputName={"website"}
          defaultValue={restaurant?.website}
          {...register("website")}
        />
        <UserInput
          required={false}
          inputLabel={"Facebook"}
          inputType={"url"}
          inputName={"facebook"}
          defaultValue={restaurant?.facebook}
          {...register("facebook")}
        />
        <UserInput
          required={false}
          inputLabel={"Instagram"}
          inputType={"url"}
          inputName={"instagram"}
          defaultValue={restaurant?.instagram}
          {...register("instagram")}
        />
        <SaveOrCancelButton
          className={"settings-save-cancel-buttons"}
          onCancel={onCancel}
          onLoad={status.onLoad}
        />
      </form>
    </StyledSocialAccountsTabItem>
  );
};
