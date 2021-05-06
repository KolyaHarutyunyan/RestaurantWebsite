import { Styled } from ".";
import { useState } from "react";
import { Icon } from "../../../components";
import { CONSTANTS } from "../../../constants";

const getHeight = (hours) => {
  let count = 0;
  hours.map((item) => {
    count += item.hours.length;
  });
  return count;
};

export const Hours = ({ hours }) => {
  console.log(hours);
  const [status, setStatus] = useState(true);
  return (
    <Styled.Hours status={status} h={600}>
      <div className="ctrl">
        <p onClick={() => setStatus((current) => !current)}>
          Hours of Operation
        </p>
        <Icon
          onClick={() => setStatus((current) => !current)}
          name={CONSTANTS.SVGNames.LeftArrow}
        />
      </div>
      <div className="hours">
        {hours.map((day) => (
          <div className="day">
            <div className="name">{day.name}</div>
            <div className="hour">
              {day.hours.map((item) => (
                <div className="line">
                  {item}
                  <div className="actionBtn">
                    <Icon name={CONSTANTS.SVGNames.RemoveHours} />
                  </div>
                  <div className="actionBtn">
                    <Icon name={CONSTANTS.SVGNames.AddHours} />
                  </div>
                </div>
              ))}
            </div>
            <div className="status"></div>
          </div>
        ))}
      </div>
    </Styled.Hours>
  );
};
