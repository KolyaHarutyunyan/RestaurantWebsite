import { StyledOverviewTabItem } from "./style";
import { SaveOrCancelButton, UserInput } from "@eachbase/components";

export const OverviewTabItem = () => {
  return (
    <StyledOverviewTabItem>
      <div className="overview-form">
        <form>
          <UserInput
            required={true}
            inputLabel={"Name"}
            inputType={"text"}
            inputName={"name"}
            inputValue={"Breakfast Menu"}
          />
          <UserInput
            required={false}
            isTextArea={true}
            inputLabel={"Description"}
            inputName={"description"}
            inputValue={""}
            inputPlaceholder={"Text here..."}
            charCounterIsShown={true}
            charLimit={"1000"}
          />
          <UserInput
            required={false}
            inputLabel={"Note"}
            inputType={"text"}
            inputName={"note"}
            inputValue={"Breakfast Menu"}
          />
          <SaveOrCancelButton
            onCancel={(e) => {
              e.preventDefault();
              alert("Cancelled");
            }}
            //  onLoad={status.onLoad}
          />
        </form>
      </div>
    </StyledOverviewTabItem>
  );
};
