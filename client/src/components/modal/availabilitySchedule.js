import React, { useEffect, useState } from "react";
import moment from "moment";
import { Checkbox } from "@material-ui/core";
import { ValidationInput } from "../inputs/validationInput";
import { StyledAvailabilitySchedule } from "./styles";
import { Icons } from "@eachbase/theme";
import { Images } from "@eachbase/theme/images";

export const AvailabilitySchedule = ({
  availabilityData,
  handleGetTimes,
  handleGetEditTimes,
  eventInfo,
}) => {
  const [times, setTime] = useState(
    availabilityData && Object.keys(availabilityData).length !== 0
      ? availabilityData
      : {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
  );

  const shortDayNames = (name) => {
    switch (name) {
      case "monday":
        return "Mon";
      case "tuesday":
        return "tue";
      case "wednesday":
        return "wed";
      case "thursday":
        return "thu";
      case "friday":
        return "fri";
      case "saturday":
        return "sat";
      case "sunday":
        return "sun";
    }
  };

  useEffect(() => {
    handleGetTimes(times);
  }, [times]);

  const addNewRow = (key) => {
    let newObj = { ...times };
    newObj[key].push({
      from: moment().format("HH:mm"),
      to: moment().format("HH:mm"),
      available: true,
    });
    setTime(newObj);
    setStateBool(true);
  };

  const changeData = (e, index, key) => {
    let obj = { ...times };
    obj[key][index][e.target.name] = e.target.value;
    if (e.target.value === "") {
      obj[key][index][e.target.name] = !e.target.checked;
    }
    setTime(obj);
    setStateBool(true);
  };

  const removeRow = (key, index) => {
    let obj = { ...times };
    obj[key].splice(index, 1);
    setTime(obj);
    setStateBool(true);
  };

  const [stateBool, setStateBool] = useState(false);

  useEffect(() => {
    if (stateBool === true && eventInfo && eventInfo.id) {
      handleGetEditTimes(times);
    }
  }, [stateBool]);

  return (
    <StyledAvailabilitySchedule>
      <div className="scrollable">
        {Object.keys(times).map(function (key, weekDayIndex) {
          return (
            <div key={weekDayIndex} className={"time-row"}>
              <p className={"day-name"}>{shortDayNames(key)}</p>
              <div className={"time-row-wrapper"}>
                {!times[key].length && (
                  <div className={"add-time"} onClick={() => addNewRow(key)}>
                    {/*<BiChevronDown size={25} />*/}
                    {/*<Icon name={SVGNames.AddIcon} color={Colors.ThemeGreen} width={'18px'} height={'18px'} />*/}
                    <span>Add Hours</span>
                  </div>
                )}
              </div>
              <div style={{ width: "100%" }}>
                {times[key].length
                  ? times[key].map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`times ${!item.available ? "closed" : ""}`}
                        >
                          <div className="time-inputs-box">
                            <ValidationInput
                              className={"time-input-style"}
                              errorFalse={true}
                              // disabled={!item.isActive}
                              name="from"
                              value={item.from}
                              type="time"
                              onChange={(e) => {
                                changeData(e, index, key);
                              }}
                            />
                            <p className={"small-line"} />
                            <ValidationInput
                              className={"time-input-style"}
                              errorFalse={true}
                              // disabled={!item.isActive}
                              name="to"
                              value={item.to}
                              type="time"
                              onChange={(e) => {
                                changeData(e, index, key);
                              }}
                            />
                          </div>
                          <div className="time-actions-box">
                            <div className={"close-checkbox"}>
                              <Checkbox
                                checked={!item.available}
                                name="available"
                                className={"custom-checkbox"}
                                onChange={(e) => {
                                  changeData(e, index, key);
                                }}
                              />
                              <span className={"not-available-text"}>
                                Closed
                              </span>
                            </div>
                            <div
                              className="remove-time-btn"
                              onClick={() => {
                                removeRow(key, index);
                              }}
                            >
                              <Images.DeleteIcon />
                            </div>
                            <span className={"not-available-text delete-time"}>
                              Delete
                            </span>
                          </div>
                        </div>
                      );
                    })
                  : ""}
                {times[key].length ? (
                  <p onClick={() => addNewRow(key)} className="more-hours-btn">
                    Add more hours
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </StyledAvailabilitySchedule>
  );
};
