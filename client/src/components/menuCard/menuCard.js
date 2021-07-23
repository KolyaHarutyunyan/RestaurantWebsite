import { useRef, useState } from "react";
import { Switch } from "../swich";
import { Container, DropDownMenuContainer } from "./style";
import { Icons } from "@eachbase/theme";
import { Menu } from "@eachbase/components";
export const MenuCard = ({
  data,
  onTitleClick = () => {},
  onRequestToDelete = () => {},
  onRequestToEdit = () => {},
  onRequestToDuplicate = () => {},
  onRequestToSwitch = () => {},
}) => {
  const descrBarRef = useRef();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <Container coverImg={data.image ? data.image.originalUrl : null}>
      <div onClick={() => onTitleClick()} className="cover">{!data.image ? <Icons.MenuIcon /> : null}</div>
      <div>

        <div className="action-bar">
        <div className="title" onClick={() => onTitleClick()}>
          {data.name}
        </div>
        <div className="action">
          <Switch
            status={data.isActive || false}
            onClick={() => onRequestToSwitch()}
          />
        </div>
      </div>
      <div className="descr-bar" ref={descrBarRef}>
        <div className="descr">{data.description}</div>
        <div className="action" onClick={() => setMenuIsOpen(true)}>
          <Icons.ThreeDots />
        </div>
      </div>
      </div>
      <Menu
          left={'170px'}
          width={'119'}
        positionalElementRef={descrBarRef}
        open={menuIsOpen}
        onRequestToClose={() => setMenuIsOpen(false)}
      >
        <DropDownMenuContainer>
          <li onClick={() => onRequestToEdit()}>Edit</li>
          {/*<li onClick={() => onRequestToDuplicate()}>Duplicate</li>*/}
          <li onClick={() => onRequestToDelete()} className="danger">
            Delete
          </li>
        </DropDownMenuContainer>
      </Menu>
    </Container>
  );
};
