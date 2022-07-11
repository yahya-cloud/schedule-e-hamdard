import React from "react";
import { StyledTextField } from "./styles";

type style = {
  [key: string]: any;
};

type Props = {
  type: string;
  label: string;
  name: string;
  inputStyles?: style;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = (props: Props) => {
  return (
    <StyledTextField
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      focused
      id="search-input"
      label={props.label}
      style={{ ...props.inputStyles }}
    />
  );
};

export default SearchInput;
