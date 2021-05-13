import { Styled, Title } from "./core";
import { Button, ItemImage } from "@eachbase/components";
import { useContext } from "react";

export const MenuInfos = ({ title, id, status, imageUrl, description }) => {
  let toggle = () => {};
  return (
    <>
      <Title title={title} status={status} id={id} changeStatus={toggle} />
      <Styled.Block>
        <Button
          className="edit"
          onClick={() => openModal.editMenu({ title: "Edit Menu Information" })}
        >
          Edit
        </Button>
        <div className="title">{title}</div>
        <ItemImage className={"avatarBlock"} url={imageUrl} type={"menu"} />

        <Styled.BlockDescription>
          <div className="title">{title}</div>
          {description}
        </Styled.BlockDescription>
      </Styled.Block>
    </>
  );
};
