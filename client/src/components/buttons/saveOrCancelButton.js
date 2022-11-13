import { Button } from "@eachbase/components";
import { StyledSaveOrCancelButton } from "./style";

export const SaveOrCancelButton = ({ className, onCancel, onLoad }) => {
  return (
    <StyledSaveOrCancelButton className={className}>
      <button type="button" className="cancel-button" onClick={onCancel}>
        Cancel
      </button>
      <Button square type="submit" onLoad={onLoad}>
        Save
      </Button>
    </StyledSaveOrCancelButton>
  );
};
