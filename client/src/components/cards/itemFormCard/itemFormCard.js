import { StyledItemFormCard } from "./style";
import { MdClose } from "react-icons/md";
import { SaveOrCancelButton } from "@eachbase/components";

export const ItemFormCard = ({
  formCardTitle,
  formCardLoader,
  handleClose,
  handleSubmitForm,
  children,
}) => {
  return (
    <StyledItemFormCard>
      <button
        type="button"
        className="close-form-card-button"
        onClick={handleClose}
      >
        <MdClose style={{ fontSize: 24 }} />
      </button>
      <form onSubmit={handleSubmitForm}>
        <div className="form-wrapper">
          <h2 className="form-card-title">{formCardTitle}</h2>
          <div className="form-content-wrapper">{children}</div>
          <SaveOrCancelButton
            className={"form-save-cancel-btns"}
            onCancel={handleClose}
            onLoad={formCardLoader}
          />
        </div>
      </form>
    </StyledItemFormCard>
  );
};
