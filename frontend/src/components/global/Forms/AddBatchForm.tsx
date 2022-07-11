import React from "react";
import { Stack, Typography } from "@mui/material";
import FormInput from "../Inputs/FormInput";
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, SchemaOf, string } from "yup";
import { useForm } from "react-hook-form";
import { RequestBodyType } from "../../../@types/global";
import { BatchPaper } from "./styles";
import Cancel from "../CancelIcon";

interface IFormInput {
  name: string;
}

type Props = {
  heading: string;
  handleClose: () => void;
  addBatchHandler: (dataObj: RequestBodyType) => Promise<void>;
};

let schema: SchemaOf<IFormInput> = object({
  name: string().required(),
});

const AddBatchForm = ({ addBatchHandler, handleClose, heading }: Props) => {
  const { handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (dataObj: RequestBodyType) => {
    await addBatchHandler(dataObj);
  };

  return (
    <BatchPaper elevation={3} component="form">
      <Cancel handleClose={handleClose} />
      <Stack
        height={"18rem"}
        flexDirection={"column"}
        alignItems="flex-start"
        justifyContent="space-around"
      >
        <Typography align="left" variant="h4" fontWeight={500}>
          {heading}
        </Typography>
        <FormInput
          fullWidth={true}
          helperText="Field is Required"
          type="text"
          control={control}
          inputStyles={{ width: "100%" }}
          name={"name"}
          label="Name"
        />

        <Button
          customStyles={{ width: "20px!important", alignSelf: "flex-end" }}
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="primary"
          text="Add New"
        />
      </Stack>
    </BatchPaper>
  );
};

export default AddBatchForm;
