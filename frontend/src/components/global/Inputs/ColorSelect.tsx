import React from "react";
import { Box, Stack } from "@mui/material";
import { StyledTextField } from "./styles";
import { Controller } from "react-hook-form";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

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
};

let colors = [
  "rgb(221, 248, 214)",
  "rgb(44, 160, 44)",
  "rgb(173, 228, 106) ",
  "rgb(242, 238, 92)",
  "rgb(255, 100, 100)",
  "rgb(63, 63, 63)",
  "rgb(109, 109, 109)",
  "rgb(246, 237, 217)",
  "rgb(235, 235, 235)",
  "rgb(0, 134, 255)",
];

const ColorSelect = (props: Props) => {
  return (
    <Controller
      name={props.name}
      defaultValue={""}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const handleClick = (color: string) => {
          onChange(color);
        };
        return (
          <Box style={{ ...props.inputStyles }}>
            <StyledTextField
              InputProps={{
                readOnly: true,
              }}
              type={props.type}
              fullWidth={props.fullWidth}
              error={error ? true : false}
              helperText={error ? props.helperText : ""}
              value={value}
              required
              id="form-input"
              label={props.label}
            />{" "}
            <Stack
              flexWrap={"wrap"}
              sx={{
                mt: 3,
                height: "13rem",
                width: "100%",
                flexDirection: "row",
              }}
              component="div"
            >
              {colors.map((el) => (
                <Box
                  key={el}
                  onClick={() => handleClick(el)}
                  component={"div"}
                  sx={{
                    cursor: "pointer",
                    marginRight: "5px",
                    height: "5rem",
                    width: "5rem",
                    borderRadius: "50%",
                    backgroundColor: `${el}`,
                  }}
                ></Box>
              ))}
            </Stack>
          </Box>
        );
      }}
    />
  );
};

export default ColorSelect;
