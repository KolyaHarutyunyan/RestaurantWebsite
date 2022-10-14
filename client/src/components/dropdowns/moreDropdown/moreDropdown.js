import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { StyledMenu } from "./style";
import { Images } from "@eachbase/theme/images";

export const MoreDropdown = ({ vertical, handleEdit, handleDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    event?.stopPropagation();
    setAnchorEl(event?.currentTarget);
  };

  const handleClose = (event) => {
    event?.stopPropagation();
    setAnchorEl(null);
  };

  const onEdit = (event) => {
    event?.stopPropagation();
    handleEdit();
    handleClose();
  };

  const onDelete = (event) => {
    event?.stopPropagation();
    handleDelete();
    handleClose();
  };

  return (
    <div>
      <button
        type="button"
        style={{ width: "24px", height: "24px" }}
        onClick={handleClick}
      >
        {vertical ? <Images.MoreIconVertical /> : <Images.MoreIcon />}
      </button>
      <div className="menu">
        <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={onEdit}>Edit</MenuItem>
          <MenuItem onClick={onDelete}>Delete</MenuItem>
        </StyledMenu>
      </div>
    </div>
  );
};
