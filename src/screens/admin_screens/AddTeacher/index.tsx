import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/global/Button";
import Form from "./Form";

const AddTeacher = () => {
  const navigate = useNavigate();
  return (
    <Box component="div">
      <Stack width="100%" justifyContent={"space-between"} flexDirection="row">
        <Typography variant="h3">Teacher Form</Typography>
        <Button
          onClick={() => {
            navigate("/teacher");
          }}
          variant="outlined"
          color="fifth"
          text="All Teachers"
        />
      </Stack>
      <Form />
    </Box>
  );
};

export default AddTeacher;
