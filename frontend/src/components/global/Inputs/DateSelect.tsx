import React, { useState } from "react";
import { Box, Popover } from "@mui/material";
import { StyledTextField } from "./styles";
import { Controller } from "react-hook-form";
import { format } from "date-fns";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type style = {
  [key: string]: any;
};

interface Props {
  type: string;
  control: any;
  label: string;
  name: string;
  inputStyles?: style;
  fullWidth: boolean;
  helperText?: string;
}

const DateSelect = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Controller
      name={props.name}
      defaultValue={""}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const handleChange = (date: Date) => {
          let selectedDate = format(date, "dd-MMM-yyyy");
          onChange(selectedDate);
          handleClose();
        };
        return (
          <Box style={{ ...props.inputStyles }}>
            <StyledTextField
              type={props.type}
              fullWidth={props.fullWidth}
              error={error ? true : false}
              helperText={error ? props.helperText : ""}
              value={value}
              onClick={handleClick}
              required
              id="form-input"
              label={props.label}
            />{" "}
            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Calendar
                editableDateInputs={true}
                onChange={(date) => handleChange(date)}
                color={"#aa0e0e"}
              />
            </Popover>
          </Box>
        );
      }}
    />
  );
};

export default DateSelect;
