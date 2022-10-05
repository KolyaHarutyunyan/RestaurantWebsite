import { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { inputsStyle } from "./style";
import axios from "axios";

export const AddressInput = ({
  disabled,
  disableLabels,
  Value,
  getAddress,
}) => {
  const classes = inputsStyle();
  const [address, setAddress] = useState(Value || "");

  const handleSelect = async (value, ev) => {
    if (address === value) return;
    setAddress(value);
    try {
      const response = await axios.post(`/address`, { address: value });
      getAddress(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const disable = disabled ? disabled === "Online" : true;

  return (
    <PlacesAutocomplete
      value={address}
      onChange={(value) => setAddress(value)}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div style={{ cursor: "pointer", position: "relative" }}>
          <div
            className={
              disable || disableLabels
                ? classes.SearchAddressDisable
                : classes.SearchAddress
            }
          >
            {/* <div className={classes.Icon}>
              <FaMapMarkedAlt />
            </div> */}
            <input
              className={`${classes.Input} ${
                disable || disableLabels ? classes.disabledInput : ""
              }`}
              value={address}
              {...getInputProps({
                disabled: disableLabels ? disableLabels : disable,
              })}
            />
          </div>
          <div className={classes.searchAddressDescription}>
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion, index) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              const style = suggestion.active
                ? {
                    backgroundColor: "#fafafa",
                    cursor: "pointer",
                    margin: "10px 20px 0 20px",
                  }
                : {
                    backgroundColor: "#ffffff",
                    cursor: "pointer",
                    margin: "10px 20px 0 20px",
                  };
              return (
                <div
                  key={index}
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span className={classes.searchAddressDescriptionText}>
                    {suggestion.description}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};
