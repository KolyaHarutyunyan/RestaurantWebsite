import { HoursContainer } from "./style";
import { useSelector } from "react-redux";
import { HourPicker, Typography } from "@eachbase/components";
import { useState } from "react";

export const HoursList = ({ hourList, onHourListChange, isOpen }) => {
  const restaurant = useSelector(({ businesses }) => businesses);
  const [hour, setHour] = useState({ hour: "01", min: "01", part: "PM" });

  if (!restaurant) {
    return null;
  }

  return (
    <HoursContainer isOpen={isOpen}>
      <div className="hour-container">
        <Typography color="text" weight="bold" className="title">
          MON
        </Typography>
        <div className="hour-list">
          <div className="hour">
            <div className="hour-container">
              <HourPicker value={hour} onChange={(value) => setHour(value)} />
            </div>
            <div className="seperator"> - </div>
            <div className="hour-container">
              <HourPicker value={hour} onChange={(value) => setHour(value)} />
            </div>
            <div className="action">Remove</div>
          </div>
          <div className="hour">
            <div className="hour-container">
              <HourPicker value={hour} onChange={(value) => setHour(value)} />
            </div>
            <div className="seperator"> - </div>
            <div className="hour-container">
              <HourPicker value={hour} onChange={(value) => setHour(value)} />
            </div>
            <div className="action">Remove</div>
          </div>
          <div className="hour">
            <div className="hour-container">
              <HourPicker value={hour} onChange={(value) => setHour(value)} />
            </div>
            <div className="seperator"> - </div>
            <div className="hour-container">
              <HourPicker value={hour} onChange={(value) => setHour(value)} />
            </div>
            <div className="action">Remove</div>
          </div>
        </div>

        <div className="status">
          <input type="checkbox" />
          <label>Closed</label>
        </div>
      </div>
    </HoursContainer>
  );
};
