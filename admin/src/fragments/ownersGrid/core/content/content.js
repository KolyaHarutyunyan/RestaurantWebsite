import { Container } from "./style";
import { IoTrash } from "react-icons/all";
import { useDispatch } from "react-redux";
import { ownersActions } from "../../../../store/owners";
export const Content = ({ owners }) => {
  const dispatch = useDispatch();

  const onRequestToDelete = ( id ) => {
    if (window.confirm("Are you sure?. you cannot revert it later")) {
      dispatch(ownersActions.deleteOwners(id))
    }
  };

  return (
    <Container>
      {owners.map((item) => (
        <div
          className="row"
          key={item.id}
        >
          <div className="col">
            {item.fullName ? item.fullName : ""}
          </div>
          <div className="col">
            <div className="restaurant-name">
              <div className="title">{item.email ? item.email : ""}</div>
            </div>
          </div>
          <div className="col">
            Delete
            <button
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                onRequestToDelete(item.id);
              }}
            >
              <IoTrash />
            </button>
          </div>
        </div>
      ))}
    </Container>
  );
};
