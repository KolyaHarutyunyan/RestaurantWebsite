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
import Router from "next/router";
import { ImgUploader } from "@eachbase/utils";

export const SettingsTabItem = () => {
  const restaurant = useSelector((state) => state.businesses) || {};

  const [img, setImg] = useState("");
  const [imgPush, setImgPush] = useState("");
  const [error, setError] = useState(false);
  const [address, setAddress] = useState(restaurant.address || {});
  const [hours, setHours] = useState(restaurant.hours || {});
  const [isShown, setIsShown] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const { dispatch, status, destroy } = useSagaStore(
    businessesActions.editBusiness
  );

  useEffect(() => () => destroy.all(), []);

  useEffect(() => {
    if (status.onSuccess) {
      destroy.success();
      reset();
      Router.push("/restaurant");
    }
  }, [status]);

  const handleFileChange = (e) => {
    for (let item of e) {
      if (item && item.size > 2097152) {
        setError(true);
      } else {
        setError("");
        setImg({
          url: URL.createObjectURL(
            new File([item], "image", { type: "text/json;charset=utf-8" })
          ),
          id: 1,
        });
        setImgPush(new File([item], `img1`));
      }
    }
  };

  const handleFileRemove = () => {
    setImg("");
    setImgPush("");
  };

  const onSubmit = async (data) => {
    const images = imgPush && (await ImgUploader([imgPush]).then((res) => res));
    data = {
      name: data.name || restaurant.name,
      description: data.description || restaurant.description,
      phoneNumber: data.phoneNumber || restaurant.phoneNumber,
      id: restaurant.id,
      address,
      hours,
    };
    images ? (data.logo = images) : "";
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
              inputPlaceholder={address[addressInput.name]}
              inputDisabled={true}
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
          onLoad={status.onLoad}
        />
      </form>
    </StyledSettingsTabItem>
  );
};
