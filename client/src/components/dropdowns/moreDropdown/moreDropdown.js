import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { StyledMenu } from "./style";
import { Images } from "@eachbase/theme/images";

export const MoreDropdown = ({ vertical, handleEdit, handleDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onEdit = () => {
    handleEdit();
    handleClose();
  };

  const onDelete = () => {
    handleDelete();
    handleClose();
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {vertical ? <Images.MoreIconVertical /> : <Images.MoreIcon />}
      </button>
      <div className="menu">
        <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={onEdit} disableRipple>
            Edit
          </MenuItem>
          <MenuItem onClick={onDelete} disableRipple>
            Delete
          </MenuItem>
        </StyledMenu>
      </div>
    </div>
  );
};
