import { HoursContainer } from "./style";
import { useSelector } from "react-redux";
import { Typography, Switch } from "@eachbase/components";

export const HoursList = ({ hourList, onHourListChange, isOpen }) => {
  const restaurant = useSelector(({ businesses }) => businesses);

  if (!restaurant) {
    return null;
  }

  return (
    <HoursContainer isOpen={isOpen}>
      <li>
        <Typography className="day" color="text" weight="bold">
          MON
        </Typography>
        <ul className="times">
          {hourList.mon.hours.map((hour, index) => (
            <li key={index}>
              <Typography color="text">
                {hour.open} - {hour.close}
              </Typography>
              <div className="actions">
                <button onClick={() => {}}>-</button>
                <button onClick={() => {}}>+</button>
              </div>
            </li>
          ))}
        </ul>
        <Switch status={hourList.mon.status !== "CLOSED"} onClick={() => {}} />
      </li>
      <li>
        <Typography className="day" color="text" weight="bold">
          TUE
        </Typography>
        <ul className="times">
          {hourList.tue.hours.map((hour, index) => (
            <li key={index}>
              <Typography color="text">
                {hour.open} - {hour.close}
              </Typography>
              <div className="actions">
                <button>-</button>
                <button>+</button>
              </div>
            </li>
          ))}
        </ul>
        <Switch status={hourList.tue.status !== "CLOSED"} />
      </li>
      <li>
        <Typography className="day" color="text" weight="bold">
          WED
        </Typography>
        <ul className="times">
          {hourList.wed.hours.map((hour, index) => (
            <li key={index}>
              <Typography color="text">
                {hour.open} - {hour.close}
              </Typography>
              <div className="actions">
                <button>-</button>
                <button>+</button>
              </div>
            </li>
          ))}
        </ul>
        <Switch status={hourList.wed.status !== "CLOSED"} />
      </li>
      <li>
        <Typography className="day" color="text" weight="bold">
          THR
        </Typography>
        <ul className="times">
          {hourList.thr.hours.map((hour, index) => (
            <li key={index}>
              <Typography color="text">
                {hour.open} - {hour.close}
              </Typography>
              <div className="actions">
                <button>-</button>
                <button>+</button>
              </div>
            </li>
          ))}
        </ul>
        <Switch status={hourList.thr.status !== "CLOSED"} />
      </li>
      <li>
        <Typography className="day" color="text" weight="bold">
          FRI
        </Typography>
        <ul className="times">
          {hourList.fri.hours.map((hour, index) => (
            <li key={index}>
              <Typography color="text">
                {hour.open} - {hour.close}
              </Typography>
              <div className="actions">
                <button>-</button>
                <button>+</button>
              </div>
            </li>
          ))}
        </ul>
        <Switch status={hourList.fri.status !== "CLOSED"} />
      </li>
      <li>
        <Typography className="day" color="text" weight="bold">
          SAT
        </Typography>
        <ul className="times">
          {hourList.sat.hours.map((hour, index) => (
            <li key={index}>
              <Typography color="text">
                {hour.open} - {hour.close}
              </Typography>
              <div className="actions">
                <button>-</button>
                <button>+</button>
              </div>
            </li>
          ))}
        </ul>
        <Switch status={hourList.sat.status !== "CLOSED"} />
      </li>
      <li>
        <Typography className="day" color="text" weight="bold">
          SUN
        </Typography>
        <ul className="times">
          {hourList.sun.hours.map((hour, index) => (
            <li key={index}>
              <Typography color="text">
                {hour.open} - {hour.close}
              </Typography>
              <div className="actions">
                <button>-</button>
                <button>+</button>
              </div>
            </li>
          ))}
        </ul>
        <Switch status={hourList.sun.status !== "CLOSED"} />
      </li>
    </HoursContainer>
  );
};
