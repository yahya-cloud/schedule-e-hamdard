import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { StyledTextField } from "./styles";
import { Controller } from "react-hook-form";

type style = {
  [key: string]: any;
};

type Props = {
  type: string;
  control: any;
  label: string;
  name: string;
  inputStyles?: style;
  fullWidth: boolean;
  helperText?: string;
}

const TimeSelect = (props: Props) => {
  let d = new Date();

  return (
    <Controller
      name={props.name}
      defaultValue={""}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              renderInput={(params) => (
                <StyledTextField
                  style={{ ...props.inputStyles }}
                  {...params}
                  type={props.type}
                  fullWidth={props.fullWidth}
                  error={error ? true : false}
                  helperText={error ? props.helperText : ""}
                  value={value}
                  required
                  id="form-input"
                  label={props.label}
                />
              )}
              value={value}
              label="min/max time"
              onChange={(newValue) => {
                onChange(newValue);
              }}
              minTime={new Date(d.setHours(8, 0, 0))}
              maxTime={new Date(d.setHours(17, 0, 0))}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};
export default TimeSelect;
