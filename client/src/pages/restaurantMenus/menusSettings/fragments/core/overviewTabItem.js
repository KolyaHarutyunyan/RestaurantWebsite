import { useEffect, useState } from "react";
import { StyledOverviewTabItem } from "./style";
import { SaveOrCancelButton, useModal, UserInput } from "@eachbase/components";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { menusActions, useSagaStore } from "@eachbase/store";
import Router from "next/router";

export const OverviewTabItem = () => {
  const [menu, setMenu] = useState({});

  const { params } = useModal();

  const restaurant = useSelector((state) => state.businesses);

  const { dispatch, status, destroy } = useSagaStore(menusActions.createMenu);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (params.menuInfo) {
      setMenu(params.menuInfo);
    }
  }, [params]);

  useEffect(() => {
    if (status.onSuccess) {
      destroy.all();
      reset();
      Router.push("/menus");
    }
  }, [status]);

  const onSubmit = (data) => {
    data = {
      businessId: restaurant.id,
      name: data.name || menu.name,
      description: data.description || menu.description,
      note: data.note || menu.note,
    };
    dispatch(data, "data");
  };

  return (
    <StyledOverviewTabItem>
      <div className="overview-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <UserInput
            required={true}
            inputLabel={"Name"}
            inputType={"text"}
            inputName={"name"}
            defaultValue={menu.name}
            {...register("name", { required: true })}
          />
          <UserInput
            required={false}
            isTextArea={true}
            inputLabel={"Description"}
            inputName={"description"}
            defaultValue={menu.description}
            inputPlaceholder={"Text here..."}
            charCounterIsShown={true}
            charLimit={"1000"}
            {...register("description")}
          />
          <UserInput
            required={false}
            inputLabel={"Note"}
            inputType={"text"}
            inputName={"note"}
            defaultValue={menu.note}
            {...register("note")}
          />
          <SaveOrCancelButton
            onCancel={(e) => {
              e.preventDefault();
              alert("Cancelled");
            }}
            onLoad={status.onLoad}
          />
        </form>
      </div>
    </StyledOverviewTabItem>
  );
};
