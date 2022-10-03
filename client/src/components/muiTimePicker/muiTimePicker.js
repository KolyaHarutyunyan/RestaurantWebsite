import { useState } from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { getWeekdayShortName } from "./constants";
import { StyledMuiTimePicker } from "./style";
import { Images } from "@eachbase/theme/images";
import { MyButton } from "@eachbase/components";

export const MuiTimePicker = ({
  timePickerFor,
  timePickerStartTime,
  timePickerEndTime,
  timePickerStartTimeHandler,
  timePickerEndTimeHandler,
  timePickerClosingHandler,
  timePickerAddingHandler,
}) => {
  const [startTime, setStartTime] = useState(
    dayjs(timePickerStartTime || new Date())
  );
  const [endTime, setEndTime] = useState(
    dayjs(timePickerEndTime || new Date())
  );
  const [timeIsClosed, setTimeIsClosed] = useState(false);

  const startTimeHandler = (newStartTime) => {
    if (timePickerStartTimeHandler) {
      timePickerStartTimeHandler(newStartTime);
    } else {
      setStartTime(newStartTime);
    }
  };

  const endTimeHandler = (newEndTime) => {
    if (timePickerEndTimeHandler) {
      timePickerEndTimeHandler(newEndTime);
    } else {
      setEndTime(newEndTime);
    }
  };

  const timeClosingHandler = (event) => {
    if (timePickerClosingHandler) {
      timePickerClosingHandler(event.target.checked);
    } else {
      setTimeIsClosed(event.target.checked);
    }
  };

  return (
    <StyledMuiTimePicker className={timeIsClosed ? "closed" : ""}>
      <div className="mui-time-picker-wrapper">
        <h2 className="mui-time-picker-for">
          {getWeekdayShortName(timePickerFor)}
        </h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="mui-time-picker-box">
            <TimePicker
              className={"mui-time-picker"}
              value={startTime}
              onChange={startTimeHandler}
              renderInput={(params) => <TextField {...params} />}
            />
            <span className="mui-time-picker-dash" />
            <TimePicker
              className={"mui-time-picker"}
              value={endTime}
              onChange={endTimeHandler}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
        </LocalizationProvider>
        <label className="mui-time-picker-closing-label">
          <input
            type="checkbox"
            checked={timeIsClosed}
            onChange={timeClosingHandler}
          />
          <div className="mui-time-picker-checkbox">
            <Images.Checkmark />
          </div>
          Closed
        </label>
        <div className="mui-time-picker-delete-icon">
          <Images.DeleteIcon />
        </div>
      </div>
      <MyButton
        type={"button"}
        buttonClassName={"add-more-hours-btn"}
        onClickButton={timePickerAddingHandler}
      >
        Add More Hours
      </MyButton>
    </StyledMuiTimePicker>
  );
};
