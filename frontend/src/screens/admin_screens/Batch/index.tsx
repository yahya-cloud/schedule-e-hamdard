import React, { useContext, useEffect, useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import {
  BatchDataType,
  RequestBodyType,
  SectionType,
} from "../../../@types/global";
import UserContextType from "../../../@types/userContext";
import { SearchInput } from "../../../components/global/Inputs";
import { UserContext } from "../../../contexts/userContext";
import Button from "../../../components/global/Button";
import Card from "../../../components/global/Card";
import { ReactComponent as BoxIcon } from "../../../assets/svg/boxIcon.svg";
import ModalContainer from "../../../components/global/Modal";
import { AddBatchForm } from "../../../components/global/Forms";
import { rootRoute } from "../../../config.keys";
import useSearchFilter from "../../../hooks/useSearchFilter";

const Batch = () => {
  const { makeApiCall } = useContext(UserContext) as UserContextType;
  const { id } = useParams();
  const [name, setName] = useState<string>("");
  const [sections, setSections] = useState<SectionType[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue, filteredData] = useSearchFilter(sections, [
    "info.section_name",
  ]);

  const addSectionHandler = async (data: RequestBodyType) => {
    let payload: RequestBodyType = {
      section_name: data.name,
      //@ts-ignore
      batch_name: name,
    };

    let newSection: SectionType = (await makeApiCall(
      "/section/",
      payload,
      "post",
    )) as SectionType;
    setSections((prev) => (prev ? [...prev, newSection] : []));
    handleClose();
  };

  const showFormHandler = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function getBatches() {
      let fetchedData = (await makeApiCall(
        `/batch/${id}`,
        {},
        "get",
      )) as BatchDataType;
      setName(fetchedData?.name);
      setSections(fetchedData?.sections);
    }
    getBatches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Box component="div">
      <Typography variant="h2" sx={{ mb: 5 }}>
        {name}
      </Typography>
      <Stack direction={"row"} sx={{ marginBottom: "4rem" }}>
        <SearchInput
          type="text"
          label="Search Batch"
          name="search-batch"
          inputStyles={{ width: "25rem", marginRight: "2rem" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          customStyles={{ width: "18.5rem", height: "5rem" }}
          onClick={showFormHandler}
          variant="contained"
          color="primary"
          text="Add Section"
        />
      </Stack>{" "}
      <Grid wrap="wrap" rowSpacing={7} container>
        {filteredData?.map((el) => (
          <Grid key={el._id} item lg={3} md={4} sm={6} xs={12}>
            <Card
              color="#F7F59F"
              path={`${rootRoute.admin}/section/${el._id}`}
              name={`Section-${el.info.section_name.toUpperCase()}`}
            >
              <BoxIcon
                style={{ height: "30px", width: "30px", color: "#FFD965" }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <ModalContainer open={open} handleClose={handleClose}>
        <AddBatchForm
          heading={"Add New Section"}
          handleClose={handleClose}
          addBatchHandler={addSectionHandler}
        />
      </ModalContainer>
    </Box>
  );
};

export default Batch;
