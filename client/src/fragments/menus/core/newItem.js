import { Styled } from ".";
import { Switch } from "@eachbase/components";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

export const Item = ({ item, newItem }) => {
  let { openModal } = useContext(ModalContext);
  const [openOptions, setOpenOptions] = useState(false);
  let toggleChecked = () => setOpenOptions(!openOptions);
  let router = useRouter();

  let openMenu = () => {
    if (!newItem) router.push(`/menu/${item.tag}`, `/menu/${item.tag}`, {});
    else {
      openModal.editMenu({ title: "Add Menu Information" });
    }
  };

  return (
    <Styled.Item>
      <Styled.ItemImage
        onClick={openMenu}
        bgi={!newItem && item.backgroundImage}
      >
        {newItem && "ICON"}
      </Styled.ItemImage>
      <Styled.ItemContent>
        {newItem ? (
          <Button className="addNew" onClick={openMenu}>
            ICON Add Menu
          </Button>
        ) : (
          <>
            <Styled.ContentLine>
              <div className="title">{item.title}</div>
              <Switch status={item.status} onClick={toggleChecked} />
            </Styled.ContentLine>
            <Styled.ContentLine mt={6}>
              <p className="description">{item.description}</p>

              <Button className={"dropBtn"} onClick={toggleChecked}>
                ICON
              </Button>

              <Styled.DropMenu status={openOptions}>
                <div className="bg" onClick={toggleChecked} />
                <Styled.DropAction
                  onClick={() => {
                    openModal.editMenu({ title: "Edit Menu Information" });
                    toggleChecked();
                  }}
                >
                  Edit
                </Styled.DropAction>
                <Styled.DropAction>Duplicate</Styled.DropAction>
                <Styled.DropAction
                  remove
                  onClick={() => {
                    openModal.removeMenu({ id: item.id });
                    toggleChecked();
                  }}
                >
                  Delete
                </Styled.DropAction>
              </Styled.DropMenu>
            </Styled.ContentLine>
          </>
        )}
      </Styled.ItemContent>
    </Styled.Item>
  );
};
