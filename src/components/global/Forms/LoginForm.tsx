import React, { useContext } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import FormInput from "../Inputs/FormInput";
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, SchemaOf, string } from "yup";
import UserContextType, { UserType } from "../../../@types/userContext";
import { UserContext } from "../../../contexts/userContext";
import { RequestBodyType } from "../../../@types/global";
import Credential from "../Crendetial";
import { userRootPath } from "../../../lib/utils";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  id: string;
  password: string;
}

let schema: SchemaOf<IFormInput> = object({
  id: string().required(),
  password: string().required(),
});

const LoginForm = () => {
  const { setUser, makeApiCall } = useContext(UserContext) as UserContextType;

  const { handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: RequestBodyType) => {
    let fetchedUser = (await makeApiCall(
      "/user/login",
      data,
      "post"
    )) as UserType;
    if (fetchedUser) {
      setUser(fetchedUser);
      let rootPath = userRootPath(fetchedUser.user_type);
      navigate(rootPath);
    }
  };

  return (
    <Paper
      sx={{
        height: "min-content",
        width: 450,
        margin: "200px auto",
        padding: "20px 10px",
      }}
      elevation={3}
      component="form">
      <Stack
        height={300}
        flexDirection={"column"}
        alignItems="center"
        justifyContent="space-around">
        <Typography align="center" gutterBottom={true} variant="h2">
          Schedule-e-Hamdard
        </Typography>
        <FormInput
          fullWidth={true}
          helperText="Field is Required"
          type="text"
          control={control}
          inputStyles={{ width: "60%" }}
          name={"id"}
          label="Enrollment number / Unique Id"
        />
        <FormInput
          fullWidth={true}
          helperText="Field is Required"
          type="password"
          control={control}
          inputStyles={{ width: "60%" }}
          name={"password"}
          label="Password"
        />
        <Button
          customStyles={{ width: "60%" }}
          onClick={handleSubmit(onSubmit)}
          variant="outlined"
          color="primary"
          text="Login"
        />
      </Stack>
      <Credential />
    </Paper>
  );
};

export default LoginForm;
