import React, { useContext } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, SchemaOf, string, date } from "yup";
import { useForm } from "react-hook-form";
import { DateSelect, FormInput, TimeSelect } from "../../global/Inputs";
import Button from "../../global/Button";
import { RequestBodyType, SectionContextType } from "../../../@types/global";
import { SectionContext } from "../../../contexts/sectionContext";

interface IFormInput {
  date: Date;
  start: Date;
  end: Date;
}

let schema: SchemaOf<IFormInput> = object({
  date: date().required(),
  start: date().required(),
  end: date().required(),
});

const AddClassForm = () => {
  const { addClass } = useContext(SectionContext) as SectionContextType;
  const { handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInput) => {
    await addClass(data);
  };

  return (
    <Paper
      sx={{
        height: "min-content",
        width: 350,
        margin: "200px",
        position: "absolute",
        right: "-120px",
        padding: "5px 10px 10px 20px",
      }}
      elevation={3}
      component="form">
      <Stack
        height={300}
        flexDirection={"column"}
        alignItems="flex-start"
        justifyContent="space-around">
        <Typography align="center" variant="h3" fontWeight={300}>
          Add Class
        </Typography>
        <DateSelect
          fullWidth={true}
          helperText="Field is Required"
          type="text"
          control={control}
          inputStyles={{ width: "90%" }}
          name={"date"}
          label="Select Date"
        />
        <TimeSelect
          fullWidth={true}
          helperText="Field is Required"
          type="text"
          control={control}
          inputStyles={{ width: "90%" }}
          name={"start"}
          label="Start Time"
        />
        <TimeSelect
          fullWidth={true}
          helperText="Field is Required"
          type="text"
          control={control}
          inputStyles={{ width: "90%" }}
          name={"end"}
          label="End Time"
        />
        <Button
          customStyles={{ marginTop: "1rem" }}
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="primary"
          text="Add Class"
        />
      </Stack>
    </Paper>
  );
};

export default AddClassForm;
