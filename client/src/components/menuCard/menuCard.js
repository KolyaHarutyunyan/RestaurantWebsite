import { useRef, useState } from "react";
import { Switch } from "../swich";
import { Container, DropDownMenuContainer } from "./style";
import { Icons } from "@eachbase/theme";
import { Menu } from "@eachbase/components";
export const MenuCard = ({
  data,
  onRequestToDelete = () => {},
  onRequestToEdit = () => {},
  onRequestToDuplicate = () => {},
}) => {
  const descrBarRef = useRef();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <Container coverImg={data.menuImg}>
      <div className="cover" />
      <div className="action-bar">
        <div className="title" onClick={() => {}}>
          {data.name}
        </div>
        <div className="action">
          <Switch status={data.isActive || false} onClick={() => {}} />
        </div>
      </div>
      <div className="descr-bar" ref={descrBarRef}>
        <div className="descr">{data.description}</div>
        <div className="action" onClick={() => setMenuIsOpen(true)}>
          <Icons.ThreeDots />
        </div>
      </div>
      <Menu
        positionalElementRef={descrBarRef}
        open={menuIsOpen}
        onRequestToClose={() => setMenuIsOpen(false)}
      >
        <DropDownMenuContainer>
          <li onClick={() => onRequestToEdit()}>Edit</li>
          <li onClick={() => onRequestToDuplicate()}>Duplicate</li>
          <li onClick={() => onRequestToDelete()} className="danger">
            Delete
          </li>
        </DropDownMenuContainer>
      </Menu>
    </Container>
  );
};
