import { Container } from "./style";
import { useDispatch } from "react-redux";
import { ownersActions } from "../../../../store/owners";
import { Images } from "../../../../assets";

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
            {item.ownerName ? item.ownerName : ""}
          </div>
          <div className="col">
            <div className="restaurant-name">


              <img
                className='logo'
                src={item?.logo?.url ? item?.logo?.url : Images.Building} alt='restaLogo'/>
              <p className="title">{item.name ? item.name : ""}</p>
            </div>
          </div>
          <div className="col">
            {item.phoneNumber ? item.phoneNumber : 'Not Set'}
          </div>

          {/*<div className="col">*/}
          {/*  Delete*/}
          {/*  <button*/}
          {/*    className="delete-button"*/}
          {/*    onClick={(e) => {*/}
          {/*      e.stopPropagation();*/}
          {/*      onRequestToDelete(item.id);*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <IoTrash />*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
      ))}
    </Container>
  );
};
