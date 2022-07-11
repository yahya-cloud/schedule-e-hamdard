import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, SchemaOf, date } from "yup";
import { useForm } from "react-hook-form";
import { DateSelect, TimeSelect } from "../../global/Inputs";
import Button from "../../global/Button";
import { SectionContextType } from "../../../@types/global";
import { SectionContext } from "../../../contexts/sectionContext";
import Cancel from "../../global/CancelIcon";
import { StyledPaper } from "./styles";

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

type Props = {
  handleClose: () => void;
};

const AddClassForm = ({ handleClose }: Props) => {
  const { addClass } = useContext(SectionContext) as SectionContextType;
  const { handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInput) => {
    let { start, end, date } = data;
    start.setMonth(date.getMonth(), date.getDate());
    end.setMonth(date.getMonth(), date.getDate());
    let payload = { start, end };
    await addClass(payload);
    handleClose();
  };

  return (
    <StyledPaper elevation={3} component="form">
      <Cancel handleClose={handleClose} />
      <Stack
        height={300}
        flexDirection={"column"}
        alignItems="flex-start"
        justifyContent="space-around"
      >
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
    </StyledPaper>
  );
};

export default AddClassForm;
