import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { buttonTheme } from "../../../themes";
import { StyledButton } from "./styles";

type style = {
  [key: string]: any;
};

type color = "primary" | "secondary" | "tertiary" | "fourth" | "fifth";
type variant = "text" | "outlined" | "contained";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  Icon?: new () => React.Component<style>;
  customStyles?: style;
  color: color;
  variant: variant;
  btnDisable?: boolean;
  text: string;
}

const Button = ({
  Icon,
  customStyles,
  color,
  btnDisable,
  text,
  onClick,
  variant,
}: Props) => {
  return (
    <ThemeProvider theme={buttonTheme}>
      <StyledButton
        disabled={btnDisable && true}
        onClick={onClick}
        sx={{
          ...customStyles,
        }}
        color={color}
        variant={`${variant}`}
      >
        {Icon && (
          <Icon
            style={{ width: "1.8rem", height: "1.8rem", marginRight: "8px" }}
          />
        )}
        <span> {text}</span>
      </StyledButton>
    </ThemeProvider>
  );
};

export default Button;
