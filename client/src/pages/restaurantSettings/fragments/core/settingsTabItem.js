import { StyledFormActionsBox, StyledSettingsTabItem } from "./style";
import { useForm } from "react-hook-form";
import {
  AddressInput,
  AvailabilitySchedule,
  MyButton,
  UserInput,
} from "@eachbase/components";
import { useState } from "react";
import { Images } from "@eachbase/theme/images";
import { addressInputs } from "./constants";

export const SettingsTabItem = ({ restaurantData }) => {
  const [inputs, setInputs] = useState(
    restaurantData ? { ...restaurantData } : {}
  );
  const [isShown, setIsShown] = useState(false);
  const [address, setAddress] = useState(inputs.address || {});
  const [hours, setHours] = useState(inputs.hours || {});

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
        <UserInput
          required={false}
          inputLabel={"Address"}
          inputFromOutside={
            <AddressInput
              Value={address.formattedAddress}
              disabled={true}
              getAddress={(newAddress) => setAddress(newAddress)}
            />
          }
        />
        <div className="address-inputs-box">
          {addressInputs.map((addressInput) => (
            <UserInput
              key={addressInput.label}
              inputClassName={"address-input"}
              required={false}
              inputLabel={addressInput.label}
              inputType={"text"}
              inputName={addressInput.name}
              inputPlaceholder={address[addressInput.name]}
              inputDisabled={true}
            />
          ))}
        </div>
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
              <AvailabilitySchedule
                onModel={"Client"}
                handleGetTimes={(e) => setHours(e)}
                availabilityData={hours}
              />
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
