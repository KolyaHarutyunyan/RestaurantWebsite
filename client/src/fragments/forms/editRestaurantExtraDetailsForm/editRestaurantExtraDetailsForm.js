import {
  Typography,
  Input,
  Button,
  useModal,
  AddressInput,
  Switch,
} from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSagaStore, businessesActions } from "@eachbase/store";
import { BiChevronDown } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { useRouter } from "next/dist/client/router";
export const EditRestaurantExtraDetailsForm = () => {
  const { register, handleSubmit } = useForm();
  const [restaurantIcon, setRestaurantIcon] = useState([]);
  const { close } = useModal();
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [toggleHoursOperations, setToggleHourseOperations] = useState(false);
  const { dispatch, status, destroy } = useSagaStore(
    businessesActions.createBusiness
  );

  const onSubmit = (data) => {
    dispatch({ ...data, icon: restaurantIcon[0] || null });
  };

  useEffect(() => () => destroy.all(), []);

  useEffect(() => {
    if (status.onSuccess) {
      close();
      destroy.success();
      router.push("/restaurant");
    }
  }, [status]);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          className="title"
          weight="bold"
          color="text"
          size="1.250rem"
        >
          Edit Extra Details
        </Typography>
        <Input
          placeholder="Add your website URL"
          icon={<Icons.WWWIcon />}
          {...register("name", { required: true })}
        />
        <Input
          placeholder="Phone Number"
          icon={<BiPhoneCall size={22} />}
          {...register("name", { required: true })}
        />
        <AddressInput
          Value={address}
          disabled={false}
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
          <ul className="details">
            <li>
              <Typography className="day" color="text" weight="bold">
                MON
              </Typography>
              <ul className="times">
                <li>
                  <Typography color="text">11:00 am - 02:00 pm</Typography>
                  <div className="actions">
                    <button>-</button>
                    <button>+</button>
                  </div>
                </li>
                <li>
                  <Typography color="text">11:00 am - 02:00 pm</Typography>
                  <div className="actions">
                    <button>-</button>
                    <button>+</button>
                  </div>
                </li>
                <li>
                  <Typography color="text">11:00 am - 02:00 pm</Typography>
                  <div className="actions">
                    <button>-</button>
                    <button>+</button>
                  </div>
                </li>
              </ul>
              <Switch />
            </li>
            <li>
              <Typography className="day" color="text" weight="bold">
                MON
              </Typography>
              <ul className="times">
                <li>
                  <Typography color="text">11:00 am - 02:00 pm</Typography>
                  <div className="actions">
                    <button>-</button>
                    <button>+</button>
                  </div>
                </li>
                <li>
                  <Typography color="text">11:00 am - 02:00 pm</Typography>
                  <div className="actions">
                    <button>-</button>
                    <button>+</button>
                  </div>
                </li>
                <li>
                  <Typography color="text">11:00 am - 02:00 pm</Typography>
                  <div className="actions">
                    <button>-</button>
                    <button>+</button>
                  </div>
                </li>
              </ul>
              <Switch />
            </li>
            <li>
              <Typography className="day" color="text" weight="bold">
                MON
              </Typography>
              <ul className="times">
                <li>
                  <Typography color="text">11:00 am - 02:00 pm</Typography>
                  <div className="actions">
                    <button>-</button>
                    <button>+</button>
                  </div>
                </li>
                <li>
                  <Typography color="text">11:00 am - 02:00 pm</Typography>
                  <div className="actions">
                    <button>-</button>
                    <button>+</button>
                  </div>
                </li>
                <li>
                  <Typography color="text">11:00 am - 02:00 pm</Typography>
                  <div className="actions">
                    <button>-</button>
                    <button>+</button>
                  </div>
                </li>
              </ul>
              <Switch />
            </li>
          </ul>
        </div>
        <Button type="submit" disabled={status.onLoad}>
          Save
        </Button>
      </form>
    </Container>
  );
};
