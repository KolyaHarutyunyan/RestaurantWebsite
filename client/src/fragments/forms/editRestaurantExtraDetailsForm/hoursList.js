import { HoursContainer } from "./style";
import { useSelector } from "react-redux";
import { HourPicker, Typography } from "@eachbase/components";
import { useState } from "react";

export const HoursList = ({ hourList, onHourListChange, isOpen }) => {
  const restaurant = useSelector(({ businesses }) => businesses);
  const [hour, setHour] = useState({
    mon: {
      status: "OPEN",
      hours: [
        {
          open: { hour: "08", min: "06", part: "AM" },
          close: { hour: "08", min: "06", part: "PM" },
        },
      ],
    },
    tue: {
      status: "OPEN",
      hours: [
        {
          open: { hour: "08", min: "06", part: "AM" },
          close: { hour: "08", min: "06", part: "PM" },
        },
      ],
    },
    wed: {
      status: "OPEN",
      hours: [
        {
          open: { hour: "08", min: "06", part: "AM" },
          close: { hour: "08", min: "06", part: "PM" },
        },
      ],
    },
    thr: {
      status: "OPEN",
      hours: [
        {
          open: { hour: "08", min: "06", part: "AM" },
          close: { hour: "08", min: "06", part: "PM" },
        },
      ],
    },
    fri: {
      status: "OPEN",
      hours: [
        {
          open: { hour: "08", min: "06", part: "AM" },
          close: { hour: "08", min: "06", part: "PM" },
        },
      ],
    },
    sat: {
      status: "OPEN",
      hours: [
        {
          open: { hour: "08", min: "06", part: "AM" },
          close: { hour: "08", min: "06", part: "PM" },
        },
      ],
    },
    sun: {
      status: "OPEN",
      hours: [
        {
          open: { hour: "08", min: "06", part: "AM" },
          close: { hour: "08", min: "06", part: "PM" },
        },
      ],
    },
  });

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
          {hour.mon.hours.map((cHour, index) => (
            <div className="hour" key={index}>
              <div className="hour-container">
                <HourPicker
                  value={cHour.open}
                  onChange={(value) =>
                    setHour({
                      ...hour,
                      mon: {
                        ...hour.mon,
                        hours: hour.mon.hours.map((h, cIndex) =>
                          cIndex === index ? { ...h, open: value } : h
                        ),
                      },
                    })
                  }
                />
              </div>
              <div className="seperator"> - </div>
              <div className="hour-container">
                <HourPicker
                  value={cHour.close}
                  onChange={(value) =>
                    setHour({
                      ...hour,
                      mon: {
                        ...hour.mon,
                        hours: hour.mon.hours.map((h, cIndex) =>
                          cIndex === index ? { ...h, close: value } : h
                        ),
                      },
                    })
                  }
                />
              </div>
              <div className="action-container">
                <div
                  className="action"
                  style={{
                    visibility:
                      hour.mon.hours.length > 1 ? "visible" : "hidden",
                  }}
                  onClick={() =>
                    setHour({
                      ...hour,
                      mon: {
                        ...hour.mon,
                        hours: hour.mon.hours.filter(
                          (_h, cIndex) => cIndex !== index
                        ),
                      },
                    })
                  }
                >
                  Remove
                </div>
              </div>
            </div>
          ))}
          <div
            className="add-button"
            onClick={() => {
              setHour({
                ...hour,
                mon: {
                  ...hour.mon,
                  hours: [
                    ...hour.mon.hours,
                    {
                      open: { hour: "08", min: "06", part: "am" },
                      close: { hour: "08", min: "06", part: "pm" },
                    },
                  ],
                },
              });
            }}
          >
            Add more hours
          </div>
        </div>
        <div className="status">
          <input
            onChange={() =>
              setHour({
                ...hour,
                mon: {
                  ...hour.mon,
                  status: hour.mon.status === "OPEN" ? "CLOSED" : "OPEN",
                },
              })
            }
            checked={hour.mon.status === "CLOSED"}
            type="checkbox"
          />
          <label>Closed</label>
        </div>
      </div>
      <div className="hour-container">
        <Typography color="text" weight="bold" className="title">
          TUE
        </Typography>
        <div className="hour-list">
          {hour.tue.hours.map((cHour, index) => (
            <div className="hour" key={index}>
              <div className="hour-container">
                <HourPicker
                  value={cHour.open}
                  onChange={(value) =>
                    setHour({
                      ...hour,
                      tue: {
                        ...hour.tue,
                        hours: hour.tue.hours.map((h, cIndex) =>
                          cIndex === index ? { ...h, open: value } : h
                        ),
                      },
                    })
                  }
                />
              </div>
              <div className="seperator"> - </div>
              <div className="hour-container">
                <HourPicker
                  value={cHour.close}
                  onChange={(value) =>
                    setHour({
                      ...hour,
                      tue: {
                        ...hour.tue,
                        hours: hour.tue.hours.map((h, cIndex) =>
                          cIndex === index ? { ...h, close: value } : h
                        ),
                      },
                    })
                  }
                />
              </div>
              <div className="action-container">
                <div
                  className="action"
                  style={{
                    visibility:
                      hour.tue.hours.length > 1 ? "visible" : "hidden",
                  }}
                  onClick={() =>
                    setHour({
                      ...hour,
                      tue: {
                        ...hour.tue,
                        hours: hour.tue.hours.filter(
                          (_h, cIndex) => cIndex !== index
                        ),
                      },
                    })
                  }
                >
                  Remove
                </div>
              </div>
            </div>
          ))}
          <div
            className="add-button"
            onClick={() => {
              setHour({
                ...hour,
                tue: {
                  ...hour.tue,
                  hours: [
                    ...hour.tue.hours,
                    {
                      open: { hour: "08", min: "06", part: "am" },
                      close: { hour: "08", min: "06", part: "pm" },
                    },
                  ],
                },
              });
            }}
          >
            Add more hours
          </div>
        </div>
        <div className="status">
          <input
            onChange={() =>
              setHour({
                ...hour,
                tue: {
                  ...hour.tue,
                  status: hour.tue.status === "OPEN" ? "CLOSED" : "OPEN",
                },
              })
            }
            checked={hour.tue.status === "CLOSED"}
            type="checkbox"
          />
          <label>Closed</label>
        </div>
      </div>
      <div className="hour-container">
        <Typography color="text" weight="bold" className="title">
          WED
        </Typography>
        <div className="hour-list">
          {hour.wed.hours.map((cHour, index) => (
            <div className="hour" key={index}>
              <div className="hour-container">
                <HourPicker
                  value={cHour.open}
                  onChange={(value) =>
                    setHour({
                      ...hour,
                      wed: {
                        ...hour.wed,
                        hours: hour.wed.hours.map((h, cIndex) =>
                          cIndex === index ? { ...h, open: value } : h
                        ),
                      },
                    })
                  }
                />
              </div>
              <div className="seperator"> - </div>
              <div className="hour-container">
                <HourPicker
                  value={cHour.close}
                  onChange={(value) =>
                    setHour({
                      ...hour,
                      wed: {
                        ...hour.wed,
                        hours: hour.wed.hours.map((h, cIndex) =>
                          cIndex === index ? { ...h, close: value } : h
                        ),
                      },
                    })
                  }
                />
              </div>
              <div className="action-container">
                <div
                  className="action"
                  style={{
                    visibility:
                      hour.wed.hours.length > 1 ? "visible" : "hidden",
                  }}
                  onClick={() =>
                    setHour({
                      ...hour,
                      wed: {
                        ...hour.wed,
                        hours: hour.wed.hours.filter(
                          (_h, cIndex) => cIndex !== index
                        ),
                      },
                    })
                  }
                >
                  Remove
                </div>
              </div>
            </div>
          ))}
          <div
            className="add-button"
            onClick={() => {
              setHour({
                ...hour,
                wed: {
                  ...hour.wed,
                  hours: [
                    ...hour.wed.hours,
                    {
                      open: { hour: "08", min: "06", part: "am" },
                      close: { hour: "08", min: "06", part: "pm" },
                    },
                  ],
                },
              });
            }}
          >
            Add more hours
          </div>
        </div>
        <div className="status">
          <input
            onChange={() =>
              setHour({
                ...hour,
                wed: {
                  ...hour.wed,
                  status: hour.wed.status === "OPEN" ? "CLOSED" : "OPEN",
                },
              })
            }
            checked={hour.wed.status === "CLOSED"}
            type="checkbox"
          />
          <label>Closed</label>
        </div>
      </div>
      <div className="hour-container">
        <Typography color="text" weight="bold" className="title">
          THR
        </Typography>
        <div className="hour-list">
          {hour.thr.hours.map((cHour, index) => (
            <div className="hour" key={index}>
              <div className="hour-container">
                <HourPicker
                  value={cHour.open}
                  onChange={(value) =>
                    setHour({
                      ...hour,
                      thr: {
                        ...hour.thr,
                        hours: hour.thr.hours.map((h, cIndex) =>
                          cIndex === index ? { ...h, open: value } : h
                        ),
                      },
                    })
                  }
                />
              </div>
              <div className="seperator"> - </div>
              <div className="hour-container">
                <HourPicker
                  value={cHour.close}
                  onChange={(value) =>
                    setHour({
                      ...hour,
                      thr: {
                        ...hour.thr,
                        hours: hour.thr.hours.map((h, cIndex) =>
                          cIndex === index ? { ...h, close: value } : h
                        ),
                      },
                    })
                  }
                />
              </div>
              <div className="action-container">
                <div
                  className="action"
                  style={{
                    visibility:
                      hour.thr.hours.length > 1 ? "visible" : "hidden",
                  }}
                  onClick={() =>
                    setHour({
                      ...hour,
                      thr: {
                        ...hour.thr,
                        hours: hour.thr.hours.filter(
                          (_h, cIndex) => cIndex !== index
                        ),
                      },
                    })
                  }
                >
                  Remove
                </div>
              </div>
            </div>
          ))}
          <div
            className="add-button"
            onClick={() => {
              setHour({
                ...hour,
                thr: {
                  ...hour.thr,
                  hours: [
                    ...hour.thr.hours,
                    {
                      open: { hour: "08", min: "06", part: "am" },
                      close: { hour: "08", min: "06", part: "pm" },
                    },
                  ],
                },
              });
            }}
          >
            Add more hours
          </div>
        </div>
        <div className="status">
          <input
            onChange={() =>
              setHour({
                ...hour,
                thr: {
                  ...hour.thr,
                  status: hour.thr.status === "OPEN" ? "CLOSED" : "OPEN",
                },
              })
            }
            checked={hour.thr.status === "CLOSED"}
            type="checkbox"
          />
          <label>Closed</label>
        </div>
      </div>
      <div className="hour-container">
        <Typography color="text" weight="bold" className="title">
          FRI
        </Typography>
        <div className="hour-list">
          {hour.fri.hours.map((cHour, index) => (
            <div className="hour" key={index}>
              <div className="hour-container">
                <HourPicker
                  value={cHour.open}
                  onChange={(value) =>
                    setHour({
                      ...hour,
                      fri: {
                        ...hour.fri,
                        hours: hour.fri.hours.map((h, cIndex) =>
                          cIndex === index ? { ...h, open: value } : h
                        ),
                      },
                    })
                  }
                />
              </div>
              <div className="seperator"> - </div>
              <div className="hour-container">
                <HourPicker
                  value={cHour.close}
                  onChange={(value) =>
                    setHour({
                      ...hour,
                      fri: {
                        ...hour.fri,
                        hours: hour.fri.hours.map((h, cIndex) =>
                          cIndex === index ? { ...h, close: value } : h
                        ),
                      },
                    })
                  }
                />
              </div>
              <div className="action-container">
                <div
                  className="action"
                  style={{
                    visibility:
                      hour.fri.hours.length > 1 ? "visible" : "hidden",
                  }}
                  onClick={() =>
                    setHour({
                      ...hour,
                      fri: {
                        ...hour.fri,
                        hours: hour.fri.hours.filter(
                          (_h, cIndex) => cIndex !== index
                        ),
                      },
                    })
                  }
                >
                  Remove
                </div>
              </div>
            </div>
          ))}
          <div
            className="add-button"
            onClick={() => {
              setHour({
                ...hour,
                fri: {
                  ...hour.fri,
                  hours: [
                    ...hour.fri.hours,
                    {
                      open: { hour: "08", min: "06", part: "am" },
                      close: { hour: "08", min: "06", part: "pm" },
                    },
                  ],
                },
              });
            }}
          >
            Add more hours
          </div>
        </div>
        <div className="status">
          <input
            onChange={() =>
              setHour({
                ...hour,
                fri: {
                  ...hour.fri,
                  status: hour.fri.status === "OPEN" ? "CLOSED" : "OPEN",
                },
              })
            }
            checked={hour.fri.status === "CLOSED"}
            type="checkbox"
          />
          <label>Closed</label>
        </div>
      </div>
    </HoursContainer>
  );
};
