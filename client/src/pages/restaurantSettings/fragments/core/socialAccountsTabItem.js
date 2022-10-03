import { useState } from "react";
import { useForm } from "react-hook-form";
import { UserInput, MyButton } from "@eachbase/components";
import { StyledFormActionsBox, StyledSocialAccountsTabItem } from "./style";

export const SocialAccountsTabItem = ({ restaurantData }) => {
  const [inputs, setInputs] = useState(
    restaurantData ? { ...restaurantData } : {}
  );

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledSocialAccountsTabItem>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserInput
          required={false}
          inputLabel={"Website"}
          inputType={"text"}
          inputName={"website"}
          inputValue={inputs.website}
          onInputChange={(e) =>
            setInputs({ ...inputs, website: e.target.value })
          }
        />
        <UserInput
          required={false}
          inputLabel={"Facebook"}
          inputType={"text"}
          inputName={"facebook"}
          inputValue={inputs.facebook}
          onInputChange={(e) =>
            setInputs({ ...inputs, facebook: e.target.value })
          }
        />
        <UserInput
          required={false}
          inputLabel={"Instagram"}
          inputType={"text"}
          inputName={"instagram"}
          inputValue={inputs.instagram}
          onInputChange={(e) =>
            setInputs({ ...inputs, instagram: e.target.value })
          }
        />
        <StyledFormActionsBox>
          <MyButton
            type="button"
            buttonClassName="cancel-button"
            onClickButton={(e) => {
              e.preventDefault();
              alert("Cancelled");
            }}
          >
            Cancel
          </MyButton>
          <MyButton type="submit" buttonClassName="save-button">
            Save
          </MyButton>
        </StyledFormActionsBox>
      </form>
    </StyledSocialAccountsTabItem>
  );
};
