import { useEffect } from "react";
import { StyledOverviewTabItem } from "./style";
import { Loader, SaveOrCancelButton, UserInput } from "@eachbase/components";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { menusActions, useSagaStore } from "@eachbase/store";
import Router from "next/router";
import { initialMenu } from "./constants";
import { FindLoad, handleOptionalField } from "@eachbase/utils";

export const OverviewTabItem = () => {
  const restaurant = useSelector((state) => state.businesses);
  const menu = useSelector((state) => state.menus.menuById);

  const loader = FindLoad("GET_BUSINESS_MENU");

  const { dispatch, status, destroy } = useSagaStore(menusActions.editMenu);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (menu) {
      reset(menu);
    } else {
      reset(initialMenu);
    }
  }, [menu]);

  useEffect(() => {
    if (status.onSuccess) {
      destroy.all();
      Router.push("/menus");
    }
  }, [status]);

  const onSubmit = (data) => {
    data = {
      ...handleOptionalField({
        name: data.name,
        description: data.description,
      }),
      businessId: restaurant?.id,
      id: menu?.id,
    };
    dispatch(data);
  };

  if (loader?.length) {
    return <Loader height={"380px"} />;
  }

  return (
    <StyledOverviewTabItem>
      <div className="overview-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <UserInput
            required={true}
            inputLabel={"Name"}
            inputType={"text"}
            inputName={"name"}
            defaultValue={menu?.name}
            {...register("name", { required: true })}
            maxLength={100}
          />
          <UserInput
            height={"300px"}
            required={false}
            isTextArea={true}
            inputLabel={"Description"}
            inputName={"description"}
            defaultValue={menu?.description}
            inputPlaceholder={"Text here..."}
            charCounterIsShown={true}
            charLimit={"1000"}
            {...register("description")}
            maxLength={1000}
          />
          {/* <UserInput
            required={false}
            inputLabel={"Note"}
            inputType={"text"}
            inputName={"note"}
            defaultValue={menu?.note}
            {...register("note")}
          /> */}
          <SaveOrCancelButton
            className={"overview-form-buttons"}
            onCancel={(e) => {
              e.preventDefault();
              Router.push("/menus");
            }}
            onLoad={status.onLoad}
          />
        </form>
      </div>
    </StyledOverviewTabItem>
  );
};
