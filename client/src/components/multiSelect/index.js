import React, { useState } from "react";
import { CircularProgress, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { inputsStyle } from "./uiStyles";
import { AiOutlinePlus } from "react-icons/ai";
import { FindLoad } from "../../utils";

export const MultiSelect = ({
  selected = [],
  onChange = () => {},
  onSearchBarValueChange = () => {},
  options,
  categoryItems,
}) => {
  const classes = inputsStyle();
  const loader = FindLoad('CREATE_CATEGORY_ITEM')
  const [selectedId, setSelectedId] = useState('')

  const newList = options.filter(function (array_el) {
    return (
      categoryItems.filter(function (anotherOne_el) {
        return anotherOne_el.item.id === array_el.value;
      }).length === 0
    );
  });

  const onSelect = (option) => {
    const lastItem = option[option.length - 1]
    setSelectedId(lastItem.value)
    const isOptionSelected = !!selected.find((sOpt) => sOpt.value === option.value);
    if (isOptionSelected) {
      onChange(selected.filter((sOpt) => sOpt.value !== option.value), null, option);
    } else {
      onChange([...selected, option], option, null);
    }
    onSearchBarValueChange("");
    // searchInputRef.current.blur();
  };


  return (
    <Autocomplete
      className={classes.noChip}
      multiple
      id="checkboxes-tags-demo"
      options={newList}
      disableCloseOnSelect
      onChange={(event, value) => onSelect(value)}

      getOptionLabel={(option) => option.label}
      renderOption={(option, {selected}) => (
        <div style={{display:'flex', alignItems:'center'}}>
          <div className={classes.addItemIcon}>
            {option.value === selectedId && loader?.length ?
              <CircularProgress
                style={{
                  margin: "auto",
                  color:  "#FF453A",
                  width:  "20px",
                  height: "20px" ,
                }}
              />
              :
              <AiOutlinePlus />
            }
          </div>
          {option.label}
        </div>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          className={classes.inputTextFieldAutoHeight}
          variant="outlined"
          label={'Choose from list'}
        />
      )}
    />
  );
};
