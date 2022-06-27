import React, { useContext, useState, useEffect } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, SchemaOf, string, date } from "yup";
import { useForm } from "react-hook-form";
import { DateSelect, FormInput, TimeSelect } from "../../global/Inputs";
import Button from "../../global/Button";
import { SectionContextType, TeacherInfoType } from "../../../@types/global";
import { SectionContext } from "../../../contexts/sectionContext";
import FilterSearch from "../../global/Inputs/FilterSearch";
import UserContextType, { StaffSchemaType } from "../../../@types/userContext";
import { UserContext } from "../../../contexts/userContext";

type nameIdObj = {
  name: String;
  _id: string;
};

interface IFormInput {
  name: string;
  subject: string;
  subject_color: string;
}

let schema: SchemaOf<IFormInput> = object({
  name: string().required(),
  subject: string().required(),
  subject_color: string().required(),
});

const AddTeacherForm = () => {
  const [selectedId, setSelectedId] = useState<string>("");
  const [apiData, setApiData] = useState<nameIdObj[] | undefined>([]);
  const { addClass } = useContext(SectionContext) as SectionContextType;
  const { makeApiCall } = useContext(UserContext) as UserContextType;
  const { handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const selectIdHandler = (_id: string) => {
    setSelectedId(_id);
  };

  const onSubmit = async (data: IFormInput) => {
    await addClass(data);
  };

  useEffect(() => {
    async function getTeachers() {
      let fetchedData = (await makeApiCall(
        `/staff/`,
        {},
        "get"
      )) as StaffSchemaType[];
      let newApiData: nameIdObj[] = fetchedData.map((el: StaffSchemaType) => {
        //@ts-ignore
        return { _id: el._id, name: el.name };
      }) as nameIdObj[];
      setApiData(newApiData);
    }
    getTeachers();
  }, []);

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
          Add Teacher To Section
        </Typography>
        <FilterSearch
          setId={selectIdHandler}
          apiData={apiData}
          fullWidth={true}
          helperText="Field is Required"
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

export default AddTeacherForm;
