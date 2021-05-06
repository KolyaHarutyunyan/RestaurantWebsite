import { BaseModal, Input, InputTypes } from "@eachbase/components";
import { Styled } from "./core";
import { useEffect, useState } from "react";
import { Button } from "@eachbase/components";
import { useSelector } from "react-redux";

export const EditRestaurantInfo = ({ status, close, title }) => {
  const [item, setItem] = useState({
    id: -1,
    title: "",
    description: "",
    imageUrl: "",
  });
  let data = useSelector((state) => state.restaurant);
  useEffect(() => {
    if (data)
      setItem({
        ...data,
        title: {
          ...InputTypes.text,
          placeholder: "title",
          dataType: "title",
          important: true,
          value: data.title || "",
        },
        description: {
          ...InputTypes.text,

          dataType: "description",
          value: data.description || "",
          maxLength: 500,
          placeholder: "description",
        },

        imageUrl: data.imageUrl || "",
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
  };

  if (item.id === -1) return null;

  return (
    <BaseModal close={close} status={status}>
      <Styled.Edit>
        <Styled.Title>{title} </Styled.Title>

        <Styled.Row>
          <Input.Name {...item.title} setState={setItem} />
        </Styled.Row>

        <Styled.Row>
          <Input.Description
            className={"description"}
            {...item.description}
            setState={setItem}
          />
        </Styled.Row>

        <Styled.Row>
          <Input.Image
            title={
              <>
                Drag & Drop or <span>Upload</span> an Image{" "}
              </>
            }
            description={"Max size 2MB"}
            type={"menu"}
            values={item.imageUrl}
            onChange={(imageUrl) =>
              setItem((current) => ({ ...current, imageUrl }))
            }
            count={1}
          />
        </Styled.Row>

        <Button.Accept className={"save"} onClick={handlerSave}>
          Save
        </Button.Accept>
      </Styled.Edit>
    </BaseModal>
  );
};
