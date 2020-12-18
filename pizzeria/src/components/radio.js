import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButtonsGroup(value) {

  const handleChange = (event) => {
    value.setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        row aria-label="position"
        value={value.value}
        onChange={handleChange}
      >
        <FormControlLabel value="pizza" control={<Radio />} label="Pizza" />
        <FormControlLabel value="boisson" control={<Radio />} label="Boisson" />
        <FormControlLabel value="dessert" control={<Radio />} label="Dessert" />
      </RadioGroup>
    </FormControl>
  );
}
