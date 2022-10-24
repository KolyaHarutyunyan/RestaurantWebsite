import { useEffect, useState } from "react";
import { StyledSettingsTabItem } from "./style";
import { useForm } from "react-hook-form";
import {
  AddressInput,
  AvailabilitySchedule,
  FileUpload,
  SaveOrCancelButton,
  UserInput,
} from "@eachbase/components";
import { Images } from "@eachbase/theme/images";
import { addressInputs } from "./constants";
import { useSelector } from "react-redux";
import { businessesActions, useSagaStore } from "@eachbase/store";
import { ImgUploader, useFileUpload } from "@eachbase/utils";

export const SettingsTabItem = () => {
  const restaurant = useSelector((state) => state.businesses) || {};

  const [address, setAddress] = useState({});
  const [hours, setHours] = useState({});
  const [isShown, setIsShown] = useState(false);
  const [uploading, setUploading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const { dispatch, status, destroy } = useSagaStore(
    businessesActions.editBusiness
  );

  const { img, imgPush, error, handleFileChange, handleFileRemove } =
    useFileUpload();

  useEffect(() => {
    setAddress({ ...restaurant?.address });
    setHours({ ...restaurant?.hours });
  }, [restaurant?.address, restaurant?.hours]);

  useEffect(() => {
    if (status.onSuccess) {
      destroy.success();
      reset();
    }
  }, [status]);

  const onSubmit = async (data) => {
    let image = null;

    if (imgPush) {
      setUploading(true);
      image = await ImgUploader([imgPush]).then((res) => {
        setUploading(false);
        return res;
      });
    }

    data = {
      ...data,
      name: data.name || restaurant.name,
      description: data.description || restaurant.description,
      phoneNumber: data.phoneNumber || restaurant.phoneNumber,
      id: restaurant.id,
      address: address?.formattedAddress,
      hours: hours || restaurant.hours,
    };
    image ? (data.logo = image) : "";
    dispatch(data);
  };

  return (
    <StyledSettingsTabItem>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserInput
          required={true}
          inputLabel={"Restuarant name"}
          inputType={"text"}
          inputName={"name"}
          defaultValue={restaurant.name}
          {...register("name", { required: true })}
        />
        <UserInput
          required={false}
          isTextArea={true}
          inputLabel={"About Restuarant"}
          inputName={"description"}
          defaultValue={restaurant.description}
          inputPlaceholder={"Text here..."}
          charCounterIsShown={true}
          charLimit={"1000"}
          {...register("description")}
        />
        <div className="file-upload-box">
          <FileUpload
            title="Restaurant Logo"
            type={"restaurant"}
            handleChange={handleFileChange}
            url={img || restaurant.logo}
            handleRemove={handleFileRemove}
            error={error}
            infoText={"Only jpg,jpeg and png files are supported."}
          />
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
          {addressInputs.map((addressInput, index) => (
            <UserInput
              key={index}
              inputClassName={"address-input"}
              required={false}
              inputLabel={addressInput.label}
              inputType={"text"}
              inputName={addressInput.name}
              defaultValue={address[addressInput.name]}
              {...register(addressInput.name)}
            />
          ))}
        </div>
        <UserInput
          required={false}
          inputLabel={"Phone Number"}
          inputType={"number"}
          inputName={"phoneNumber"}
          defaultValue={restaurant.phoneNumber}
          {...register("phoneNumber")}
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
        <SaveOrCancelButton
          onCancel={(e) => {
            e.preventDefault();
            alert("Cancelled");
          }}
          onLoad={status.onLoad || uploading}
        />
      </form>
    </StyledSettingsTabItem>
  );
};
