import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl } from "@material-ui/core";

const MyRadioGroup = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
    },
    formControl: {
      margin: theme.spacing(3),
    },
    group: {
      margin: theme.spacing(1, 0),
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{props.label}</FormLabel>
        <RadioGroup
          aria-label={props.label}
          name={props.name}
          value={props.value}
          onChange={props.valueChange}
          className={classes.group}>
          {props.items.map(({ value, label }) => (
            <FormControlLabel value={value} control={<Radio />} label={label} />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default MyRadioGroup;
