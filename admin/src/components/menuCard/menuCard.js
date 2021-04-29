import { Switch } from "../switch";
import { Container } from "./style";

export const MenuCard = ({ data, onTitleClick }) => {
  return (
    <Container coverImg={data.menuImg}>
      <div className="cover" />
      <div className="action-bar">
        <div className="title" onClick={() => onTitleClick()}>
          Long Long Long Long Long Very Long Title
        </div>
        <div className="action">
          <Switch />
        </div>
        {/* switch */}
      </div>
      <div className="descr">
        Long Long Long Long Long very long description
      </div>
    </Container>
  );
};
