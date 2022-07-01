import React, { useEffect, useState } from "react";
import { StyledTextField } from "./styles";
import { Controller } from "react-hook-form";
import { Box, Popover, Typography, Stack } from "@mui/material";

type style = {
  [key: string]: any;
};

type nameIdObj = {
  name: String;
  _id: string;
};

interface Props {
  control: any;
  label: string;
  name: string;
  inputStyles?: style;
  fullWidth: boolean;
  helperText?: string;
  apiData: nameIdObj[] | undefined;
  setId: (_id: string) => void;
}

const FilterSearch = (props: Props) => {
  const [filteredResults, setFilteredResults] = useState<
    nameIdObj[] | undefined
  >([]);

  useEffect(() => {
    setFilteredResults(props.apiData);
  }, [props.apiData]);

  const searchItems = (searchValue: string) => {
    if (searchValue !== "") {
      const filteredData = props.apiData!.filter((item: nameIdObj) => {
        return item.name
          .trim()
          .toLowerCase()
          .includes(searchValue.trim().toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(props.apiData);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Controller
      name={props.name}
      defaultValue={""}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const changeHandler = (
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => {
          searchItems(e.target.value);
          onChange(e.target.value);
        };

        const clickHandler = (_id: string) => {
          let selectedData = props.apiData?.find((el) => el._id === _id);
          onChange(selectedData?.name);
          props.setId(_id);
          handleClose();
        };

        return (
          <Box style={{ ...props.inputStyles }}>
            <StyledTextField
              onClick={handleClick}
              type={"text"}
              fullWidth={true}
              error={error ? true : false}
              helperText={error ? props.helperText : ""}
              value={value}
              onChange={changeHandler}
              required
              id="form-input"
              label={props.label}
            />
            <Popover
              disableAutoFocus={true}
              disableEnforceFocus={true}
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}>
              <Stack sx={{ maxHeight: "15rem", overflowY: "scroll" }}>
                {filteredResults?.map((el: nameIdObj) => (
                  <Box
                    onClick={() => clickHandler(el._id)}
                    component={"div"}
                    key={el._id}
                    sx={{
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#43B47C80",
                      },
                      cursor: "pointer",
                      color: "#000",
                      height: "2.5rem",
                      padding: "1rem .5rem",
                      width: "20rem",
                    }}>
                    <Typography variant="h5">{el.name}</Typography>
                  </Box>
                ))}
              </Stack>
            </Popover>
          </Box>
        );
      }}
    />
  );
};

export default FilterSearch;
