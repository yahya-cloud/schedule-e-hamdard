import React, { useContext } from "react";
import { Grid, Stack } from "@mui/material";
import { FormInput } from "../../../components/global/Inputs";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, SchemaOf, string, number } from "yup";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../contexts/userContext";
import UserContextType from "../../../@types/userContext";
import Button from "../../../components/global/Button";
import { useNavigate } from "react-router-dom";
import { rootRoute } from "../../../config.keys";
import { StyledForm, StyledImageContainer } from "./styles";

interface IFormInput {
  name: string;
  email: string;
  phone_number: number;
}

let schema: SchemaOf<IFormInput> = object({
  name: string().required(),
  email: string().required(),
  phone_number: number().required(),
});

const Form = () => {
  const { makeApiCall } = useContext(UserContext) as UserContextType;
  const { handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data: IFormInput) => {
    const { name, email, phone_number } = data;
    let payload = {
      name,
      email,
      phone_number,
      user_type: "teacher",
      photo: "some link",
    };
    await makeApiCall(`/staff/`, payload, "post");
    navigate(`${rootRoute.admin}/teacher`);
  };

  return (
    <Stack
      sx={{ mt: 5 }}
      width="100%"
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      flexDirection="row"
    >
      <Stack alignItems={"center"}>
        <StyledImageContainer component="div"></StyledImageContainer>
        <Button
          btnDisable={true}
          customStyles={{ marginTop: "2rem" }}
          onClick={handleSubmit(onSubmit)}
          variant="outlined"
          color="fifth"
          text="Upload Photo"
        />
      </Stack>
      <StyledForm component="form">
        <Grid container spacing={2}>
          <Grid item md={4}>
            <FormInput
              fullWidth={true}
              helperText="Field is Required"
              type="text"
              control={control}
              inputStyles={{ marginTop: "2rem", width: "90%" }}
              name={"name"}
              label="Enter Name"
            />
          </Grid>
          <Grid item md={4}>
            <FormInput
              fullWidth={true}
              helperText="Field is Required"
              type="text"
              control={control}
              inputStyles={{ marginTop: "2rem", width: "90%" }}
              name={"email"}
              label="Enter Email"
            />
          </Grid>
          <Grid item md={4}>
            <FormInput
              fullWidth={true}
              helperText="Field is Required"
              type="text"
              control={control}
              inputStyles={{ marginTop: "2rem", width: "90%" }}
              name={"phone_number"}
              label="Enter Phone Number"
            />
          </Grid>
        </Grid>
        <Button
          customStyles={{ position: "absolute", bottom: 0, right: 0 }}
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="primary"
          text="Add Teacher"
        />
      </StyledForm>
    </Stack>
  );
};

export default Form;
