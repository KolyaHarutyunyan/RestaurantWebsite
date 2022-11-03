import { useContext, useEffect, useState } from "react";
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
import {
  ImgUploader,
  SideSheetsDrawerContext,
  useFileUpload,
} from "@eachbase/utils";
import { addClosed } from "@eachbase/fragments/layout/sideSheetsDrawer/constants";

export const SettingsTabItem = () => {
  const restaurant = useSelector((state) => state.businesses);

  const [address, setAddress] = useState({});
  const [formattedAddress, setFormattedAddress] = useState("");
  const [hours, setHours] = useState({});
  const [isShown, setIsShown] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [logo, setLogo] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  const { dispatch, status, destroy } = useSagaStore(
    businessesActions.editBusiness
  );

  const { img, imgPush, error, handleFileChange, handleFileRemove } =
    useFileUpload(logo);

  const { open } = useContext(SideSheetsDrawerContext);

  useEffect(() => {
    if (restaurant) {
      reset(restaurant);
      setLogo(restaurant?.logo);
      setFormattedAddress(restaurant.address?.formattedAddress);
      setAddress({
        country: restaurant.address?.country,
        city: restaurant.address?.city,
        state: restaurant.address?.state,
        zip: restaurant.address?.zip,
      });
      setHours(restaurant?.hours);
    }
  }, [restaurant]);

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
      phoneNumber: data.phoneNumber ? data.phoneNumber : null,
      description: data.description ? data.description : null,
      ...address,
      id: restaurant?.id,
      address: formattedAddress,
      hours: hours,
      logo: image,
      removeLogo: !img,
    };
    dispatch(data);
  };

  const onCancel = (e) => {
    e.preventDefault();
    reset(restaurant);
    setLogo(restaurant?.logo);
  };

  return (
    <StyledSettingsTabItem>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserInput
          required={true}
          inputLabel={"Restuarant name"}
          inputType={"text"}
          inputName={"name"}
          defaultValue={restaurant?.name}
          {...register("name", { required: true })}
        />
        <UserInput
          required={false}
          isTextArea={true}
          inputLabel={"About Restuarant"}
          inputName={"description"}
          defaultValue={restaurant?.description}
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
            url={img}
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
              Value={formattedAddress}
              disabled={true}
              setFullAddress={setAddress}
              setFormattedAddress={setFormattedAddress}
            />
          }
        />
        <div className="address-inputs-box">
          {addressInputs.map((addressInput, index) => (
            <UserInput
              key={index}
              inputClassName={addClosed("address-input", !open)}
              required={false}
              inputLabel={addressInput.label}
              inputType={"text"}
              inputName={addressInput.name}
              value={address[addressInput.name] || ""}
              onChange={(event) =>
                setAddress((prevState) => ({
                  ...prevState,
                  [addressInput.name]: event.target.value,
                }))
              }
            />
          ))}
        </div>
        <UserInput
          inputError={
            status?.onError === "phoneNumber must be a valid phone number"
              ? "Phone  Number must be a valid phone number"
              : ""
          }
          required={false}
          inputLabel={"Phone Number"}
          inputType={"number"}
          inputName={"phoneNumber"}
          defaultValue={restaurant?.phoneNumber}
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
          className={"settings-save-cancel-buttons"}
          onCancel={onCancel}
          onLoad={status.onLoad || uploading}
        />
      </form>
    </StyledSettingsTabItem>
  );
};
