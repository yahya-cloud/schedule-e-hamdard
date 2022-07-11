import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, SchemaOf, string, number } from "yup";
import { useForm } from "react-hook-form";
import { FormInput } from "../../global/Inputs";
import Button from "../../global/Button";
import { SectionContextType } from "../../../@types/global";
import { SectionContext } from "../../../contexts/sectionContext";
import { StyledPaper } from "../AddClassForm/styles";
import Cancel from "../../global/CancelIcon";

interface IFormInput {
  name: string;
  en_number: string;
  email: string;
  phone_number: number;
}

let schema: SchemaOf<IFormInput> = object({
  name: string().required(),
  en_number: string().required(),
  email: string().required(),
  phone_number: number().required(),
});

type Props = {
  handleClose: () => void;
};

const AddStudentForm = ({ handleClose }: Props) => {
  const { addStudent } = useContext(SectionContext) as SectionContextType;

  const { handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInput) => {
    await addStudent(data);
    handleClose();
  };

  return (
    <StyledPaper elevation={3} component="form">
      <Cancel handleClose={handleClose} />
      <Stack
        mt={2}
        flexDirection={"column"}
        alignItems="flex-start"
        justifyContent="space-around"
      >
        <Typography align="center" variant="h3" fontWeight={300}>
          Add Student To Section
        </Typography>

        <FormInput
          fullWidth={true}
          helperText="Field is Required"
          type="text"
          control={control}
          inputStyles={{ marginTop: "2rem", width: "90%" }}
          name={"name"}
          label="Enter Name"
        />
        <FormInput
          fullWidth={true}
          helperText="Field is Required"
          type="text"
          control={control}
          inputStyles={{ marginTop: "2rem", width: "90%" }}
          name={"en_number"}
          label="Enter Enrollment No."
        />
        <FormInput
          fullWidth={true}
          helperText="Field is Required"
          type="text"
          control={control}
          inputStyles={{ marginTop: "2rem", width: "90%" }}
          name={"email"}
          label="Enter Email"
        />
        <FormInput
          fullWidth={true}
          helperText="Field is Required"
          type="text"
          control={control}
          inputStyles={{ marginTop: "2rem", width: "90%" }}
          name={"phone_number"}
          label="Enter Phone Number"
        />

        <Button
          customStyles={{ marginTop: "2.5rem" }}
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="primary"
          text="Add Student"
        />
      </Stack>
    </StyledPaper>
  );
};

export default AddStudentForm;
