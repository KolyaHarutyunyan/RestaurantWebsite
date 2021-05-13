import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { menusActions } from "@eachbase/store";
import { Switch } from "../../../../admin/src/components/switch";
import { Container } from "./style";
import { history } from "@eachbase/utils";
export const MenuCard = ({ data }) => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  
  return (
    <Container coverImg={data.menuImg}>
      <div className="cover" />
      <div className="action-bar">
        <div
          className="title"
          onClick={() =>
            history.push(`/restaurants/${restaurantId}/${data._id}`)
          }
        >
          {data.name}
        </div>
        <div className="action">
          <Switch
            status={data.isActive || false}
            onClick={() =>
              dispatch(
                menusActions.editMenu({
                  ...data,
                  isActive: !data.isActive,
                })
              )
            }
          />
        </div>
        {/* switch */}
      </div>
      <div className="descr">{data.description}</div>
    </Container>
  );
};
