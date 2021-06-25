import { HoursContainer } from "./style";
import { useSelector } from "react-redux";
import { HourPicker } from "@eachbase/components";
import { useState } from "react";

export const HoursList = ({ hourList, onHourListChange, isOpen }) => {
  const restaurant = useSelector(({ businesses }) => businesses);
  const [hour, setHour] = useState({ hour: "01", min: "01", part: "PM" });
  if (!restaurant) {
    return null;
  }

  return (
    <HoursContainer isOpen={isOpen}>
      <HourPicker value={hour} onChange={(value) => setHour(value)} />
    </HoursContainer>
  );
};
