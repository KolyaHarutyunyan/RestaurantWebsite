import { Styled } from ".";
import { useState } from "react";
export const Hours = ({ hours }) => {
  console.log(hours);
  const [status, setStatus] = useState(true);
  return (
    <Styled.Hours status={status} h={600}>
      <div className="ctrl">
        <p onClick={() => setStatus((current) => !current)}>
          Hours of Operation
        </p>
        ICON
      </div>
      <div className="hours">
        {hours.map((day) => (
          <div className="day">
            <div className="name">{day.name}</div>
            <div className="hour">
              {day.hours.map((item) => (
                <div className="line">
                  {item}
                  <div className="actionBtn">ICON</div>
                  <div className="actionBtn">ICON</div>
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
