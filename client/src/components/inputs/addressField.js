import { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { inputsStyle } from "./style";
import { FaMapMarkedAlt } from "react-icons/fa";
export const AddressInput = ({
  handleChangeValue,
  handleSelectValue,
  disabled,
  disableLabels,
  Value,
}) => {
  const classes = inputsStyle();
  const [address, setAddress] = useState("");

  const handleChange = (value) => {
    setAddress(value);
    handleChangeValue(value);
  };

  const handleSelect = (value) => {
    handleSelectValue(value);
    setAddress(value);
  };

  const disable = disabled ? disabled === "Online" : true;
  const placeholder = Value ? Value : "Search address...";

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div style={{ cursor: "pointer" }}>
          <div
            className={
              disable || disableLabels
                ? classes.SearchAddressDisable
                : classes.SearchAddress
            }
          >
            <div className={classes.Icon}>
              <FaMapMarkedAlt />
            </div>
            <input
              className={`${classes.Input} ${
                disable || disableLabels ? classes.disabledInput : ""
              }`}
              {...getInputProps({
                placeholder: placeholder,
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
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
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
