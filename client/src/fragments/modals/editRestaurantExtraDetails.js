import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BaseModal, Button, Input, InputTypes } from "@eachbase/components";
import { Styled, Hours } from "./core";

export const EditRestaurantExtraDetails = ({ status, close }) => {
  const [item, setItem] = useState({
    webSite: "",
    phone: "",
    location: "",
    hours: "",
  });
  const data = useSelector(({ restaurant }) => {
    if (restaurant) {
      return restaurant.menus || [];
    } else {
      return [];
    }
  });

  useEffect(() => {
    if (data)
      setItem({
        ...data,
        webSite: {
          ...InputTypes.text,
          placeholder: "webSite",
          dataType: "webSite",
          value: data.title || "",
        },
        phone: {
          ...InputTypes.text,
          dataType: "phone",
          value: data.phone || "",
          placeholder: "phone",
        },

        location: {
          ...InputTypes.text,
          dataType: "location",
          value: data.location || "",
          placeholder: "location",
        },
      });
    return () =>
      setItem({
        webSite: "",
        phone: "",
        location: "",
        hours: "",
      });
  }, [status]);

  const handlerSave = () => {
    let editedItem = {
      id: item.id || -1,
      title: item.title.value || "",
      description: item.description.value || "",
      options: item.options.value || "",
      imageUrl: item.imageUrl.value || [],
      type: item.type.value || "food",
      parents: item.parents.value || [],
      price: item.price.value || "",
    };

    console.log(editedItem);
  };

  return (
    <BaseModal close={close} status={status}>
      <Styled.Edit>
        <Styled.Title> Edit Extra Details </Styled.Title>

        <Styled.Row>
          <Input.WebSite {...item.webSite} setState={setItem} />
        </Styled.Row>

        <Styled.Row>
          <Input.Phone {...item.phone} setState={setItem} />
        </Styled.Row>

        <Styled.Row>
          <Input.Location {...item.location} setState={setItem} />
        </Styled.Row>
        <Styled.Row mt={40} Tmt={32} Mmt={25}>
          <Hours hours={item.hours} />
        </Styled.Row>

        <Button.Accept className={"save"} onClick={handlerSave}>
          Save
        </Button.Accept>
      </Styled.Edit>
    </BaseModal>
  );
};
