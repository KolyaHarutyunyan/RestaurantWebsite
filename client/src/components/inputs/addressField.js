import { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { StyledAddressInput } from "./style";
import axios from "axios";

export const AddressInput = ({
  disabled,
  disableLabels,
  Value,
  getAddress,
}) => {
  const [address, setAddress] = useState("");

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
    <StyledAddressInput>
      <PlacesAutocomplete
        value={Value || address}
        onChange={(value) => setAddress(value)}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="search-address-wrapper">
            <div
              className={`search-address ${
                disable || disableLabels ? "disabled" : ""
              }`}
            >
              {/* <div className="icon"><FaMapMarkedAlt /></div> */}
              <input
                className="search-address-input"
                value={address}
                {...getInputProps({
                  disabled: disableLabels ? disableLabels : disable,
                })}
              />
            </div>
            <div className="search-address-description">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  {...getSuggestionItemProps(suggestion, {
                    className: `suggestion-item ${
                      suggestion.active ? "active" : ""
                    }`,
                  })}
                >
                  <span className="description-text">
                    {suggestion.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </StyledAddressInput>
  );
};
