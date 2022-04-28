import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {
  Typography,
  Input,
  Button,
  useModal,
  AddressInput,
  AvailabilitySchedule,
} from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { Container } from "./style";
import { useSagaStore, businessesActions } from "@eachbase/store";
import { useRouter } from "next/dist/client/router";

export const EditRestaurantExtraDetailsForm = () => {
  const { close } = useModal();
  const router = useRouter();
  const restaurant = useSelector(({ businesses }) => businesses);
  const { register, handleSubmit, reset } = useForm();
  const [hours, setHours] = useState( null);
  const [address, setAddress] = useState(restaurant ? restaurant.address ?  restaurant.address.formattedAddress : '' : "");
  const { dispatch, status, destroy } = useSagaStore(
    businessesActions.editBusiness
  );

  const onSubmit = (info) => {
    const data ={
      website: info.website,
      phoneNumber: info.phoneNumber,
      address:address,
      id:restaurant.id,
    }
    hours ? data.hours = hours : ''
    dispatch(data);
  };

  useEffect(() => () => destroy.all(), []);

  useEffect(() => {
    if (status.onSuccess) {
      close();
      destroy.success();
      reset();
      router.push("/restaurant");
    }
  }, [status]);

  if (!restaurant) {
    return false;
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          className="title"
          weight="bold"
          color="text"
        >
          Edit Contact Details
        </Typography>
        <Input
          placeholder="Add your website URL"
          icon={<Icons.WWWIcon />}
          defaultValue={restaurant.website}
          {...register("website", { required: true })}
        />
        <Input
            helperColo={true}
            helper={status.onError === "phoneNumber must be a valid phone number" ? 'Not valid phone number' : ''}
            placeholder="Phone Number"
            icon={<Icons.CallIcon size={22} />}
            defaultValue={restaurant.phoneNumber}
            type={'number'}
            {...register("phoneNumber", { required: true,  })}
        />
        <AddressInput
          Value={restaurant ? restaurant.address && restaurant.address.formattedAddress  : address}
          disabled={true}
          handleSelectValue={(e)=> setAddress(e)}
          handleChangeValue={(val) => setAddress(val)}
        />
        <AvailabilitySchedule
            // handleGetEditTimes={(t) => setEditedTime(t)}
            // eventInfo={eventInfo}
            onModel={'Client'}
            handleGetTimes={(e) =>  setHours(e)}
            availabilityData={restaurant ? restaurant?.hours : ''}
            // handleClose={handleOpenClose}
        />
        <Button
            square
            type="submit" onLoad={status.onLoad}>
          Save
        </Button>
      </form>
    </Container>
  );
};
