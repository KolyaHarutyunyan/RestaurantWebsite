import { StyledMoreDropdown } from "./style";
import { Images } from "@eachbase/theme/images";

export const MoreDropdown = ({
  vertical,
  handleEdit,
  handleDuplicate,
  handleDelete,
}) => {
  return (
    <StyledMoreDropdown>
      <div className="menu-more-icon">
        {vertical ? <Images.MoreIconVertical /> : <Images.MoreIcon />}
      </div>
      <div className="menu-more-dropdown-content">
        <button type={"button"} onClick={handleEdit}>
          Edit
        </button>
        <button type={"button"} onClick={handleDuplicate}>
          Duplicate
        </button>
        <button type={"button"} className={"danger"} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </StyledMoreDropdown>
  );
};
