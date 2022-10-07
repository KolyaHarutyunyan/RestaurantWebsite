import { Button, MyButton } from ".";
import { StyledSaveOrCancelButton } from "./style";

export const SaveOrCancelButton = ({ className, onCancel, onLoad }) => {
  return (
    <StyledSaveOrCancelButton className={className}>
      <MyButton
        type="button"
        buttonClassName="cancel-button"
        onClickButton={onCancel}
      >
        Cancel
      </MyButton>
      <Button square type="submit" onLoad={onLoad}>
        Save
      </Button>
    </StyledSaveOrCancelButton>
  );
};
