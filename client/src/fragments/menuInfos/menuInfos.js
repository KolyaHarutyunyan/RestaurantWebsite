import { Styled, Title } from "./core";
import { Button, ItemImage } from "@eachbase/components";
import { useContext } from "react";

export const MenuInfos = ({ title, id, status, imageUrl, description }) => {
  let { openModal } = useContext(ModalContext);
  let toggle = () => console.log("change Status");
  return (
    <>
      <Title title={title} status={status} id={id} changeStatus={toggle} />
      <Styled.Block>
        <Button.Accept
          className="edit"
          onClick={() => openModal.editMenu({ title: "Edit Menu Information" })}
        >
          Edit
        </Button.Accept>
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
