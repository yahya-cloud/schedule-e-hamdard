import React from "react";
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
};

const FormInput = (props: Props) => {
  return (
    <Controller
      name={props.name}
      defaultValue={""}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <StyledTextField
            type={props.type}
            fullWidth={props.fullWidth}
            error={error ? true : false}
            helperText={error ? props.helperText : ""}
            value={value}
            onChange={onChange}
            required
            id="form-input"
            label={props.label}
            style={{ ...props.inputStyles }}
          />
        );
      }}
    />
  );
};

export default FormInput;
