import {
  Typography,
  Input,
  Button,
  useModal,
  AddressInput,
} from "@eachbase/components";
import { HoursList } from "./hoursList";
import { Icons } from "@eachbase/theme";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSagaStore, businessesActions } from "@eachbase/store";
import { BiChevronDown } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";

export const EditRestaurantExtraDetailsForm = () => {
  const { close } = useModal();
  const restaurant = useSelector(({ businesses }) => businesses);

  const { register, handleSubmit, reset } = useForm();
  const [restaurantIcon, setRestaurantIcon] = useState([]);
  const router = useRouter();
  const [address, setAddress] = useState(restaurant ? restaurant.address ?  restaurant.address.formattedAddress : '' : "");
  const [hoursSnapshot, setHoursSnapshot] = useState(null);

  const [toggleHoursOperations, setToggleHourseOperations] = useState(false);
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

    dispatch(data );
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

  useEffect(() => {
    if (restaurant && !hoursSnapshot) {
      let modifiedHourses = { ...restaurant.hours };
      setHoursSnapshot(restaurant.hours);
    }
  }, [restaurant]);

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
          Edit Extra Details
        </Typography>
        <Input
          placeholder="Add your website URL"
          icon={<Icons.WWWIcon />}
          defaultValue={restaurant.website}
          {...register("website", { required: true })}
        />
        <Input
          placeholder="Phone Number"
          icon={<BiPhoneCall size={22} />}
          defaultValue={restaurant.phoneNumber}
          {...register("phoneNumber", { required: true })}
        />
        <AddressInput
          Value={restaurant ? restaurant.address && restaurant.address.formattedAddress  : address}
          disabled={true}
          handleSelectValue={()=> console.log('aaa')}
          handleChangeValue={(val) => setAddress(val)}
        />
        <div
          className={`hours-operations ${
            toggleHoursOperations ? "open" : "close"
          }`}
        >
          <Button
            link
            color="text"
            className="toggle-button"
            onClick={() => setToggleHourseOperations(!toggleHoursOperations)}
          >
            Hours of Operation&nbsp;
            <div className="icon">
              <BiChevronDown size={25} />
            </div>
          </Button>
          {hoursSnapshot && (
            <HoursList
              hourList={hoursSnapshot}
              onHourListChange={(newHoursSnap) =>
                setHoursSnapshot(newHoursSnap)
              }
              isOpen={toggleHoursOperations}
            />
          )}
        </div>
        <Button
            square
            type="submit" onLoad={status.onLoad}>
          Save
        </Button>
      </form>
    </Container>
  );
};
