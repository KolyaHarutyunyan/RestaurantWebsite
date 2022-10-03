import { StyledFormActionsBox, StyledSettingsTabItem } from "./style";
import { useForm } from "react-hook-form";
import { MuiTimePicker, MyButton, UserInput } from "@eachbase/components";
import { useState } from "react";
import { Images } from "@eachbase/theme/images";

export const SettingsTabItem = ({ restaurantData }) => {
  const [inputs, setInputs] = useState(
    restaurantData ? { ...restaurantData } : {}
  );
  const [isShown, setIsShown] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledSettingsTabItem>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserInput
          required={true}
          inputLabel={"Restuarant name"}
          inputType={"text"}
          inputName={"name"}
          inputValue={inputs.name}
          onInputChange={(e) => setInputs({ ...inputs, name: e.target.value })}
        />
        <UserInput
          required={false}
          isTextArea={true}
          inputLabel={"About Restuarant"}
          inputName={"description"}
          inputValue={inputs.description}
          onInputChange={(e) =>
            setInputs({ ...inputs, description: e.target.value })
          }
          inputPlaceholder={"Text here..."}
          charCounterIsShown={true}
          charLimit={"1000"}
        />
        <div className="file-input-box">
          <div className="file-input-wrapper">
            <div className="restaurant-logo">
              {inputs.logo || <Images.RestaurantLogo />}
            </div>
            <p className="file-upload-text">
              {"Drag & Drop or"}
              <label className="upload-label">
                <input type="file" />
                Upload
              </label>
              {"Restaurant Logo"}
            </p>
            <p className="supported-file-text">
              Only jpg,jpeg and png files are supported. Max size 2MB
            </p>
          </div>
        </div>
        {/* Address Input goes here... */}
        <UserInput
          required={false}
          inputLabel={"Phone Number"}
          inputType={"number"}
          inputName={"phone"}
          inputValue={inputs.phone}
          onInputChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
        />
        <div className="hours-of-operation-box">
          <div
            className="accordion-toggler"
            onClick={() => setIsShown((pS) => !pS)}
          >
            Add Hours of Operation
            <Images.Arrow className={isShown ? "shown" : ""} />
          </div>
          {isShown && (
            <div className="time-pickers-box">
              <MuiTimePicker timePickerFor={"Monday"} />
              <MuiTimePicker timePickerFor={"Tuesday"} />
              <MuiTimePicker timePickerFor={"Wednesday"} />
              <MuiTimePicker timePickerFor={"Thursday"} />
              <MuiTimePicker timePickerFor={"Friday"} />
              <MuiTimePicker timePickerFor={"Saturday"} />
              <MuiTimePicker timePickerFor={"Sunday"} />
            </div>
          )}
        </div>
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
    </StyledSettingsTabItem>
  );
};
