import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { BatchType, RequestBodyType } from "../../../@types/global";
import UserContextType from "../../../@types/userContext";
import Card from "../../../components/global/Card";
import Button from "../../../components/global/Button";
import { AddBatchForm } from "../../../components/global/Forms";
import { SearchInput } from "../../../components/global/Inputs";
import { UserContext } from "../../../contexts/userContext";
import { ReactComponent as BoxIcon } from "../../../assets/svg/boxIcon.svg";
import ModalContainer from "../../../components/global/Modal";
import { rootRoute } from "../../../config.keys";
import useSearchFilter from "../../../hooks/useSearchFilter";

const Batches = () => {
  const [batches, setBatches] = useState<BatchType[]>([]);
  const { makeApiCall } = useContext(UserContext) as UserContextType;
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue, filteredData] = useSearchFilter(batches, ["name"]);

  const addBatchHandler = async (data: RequestBodyType) => {
    let newBatch: BatchType = (await makeApiCall(
      "/batch/",
      data,
      "post",
    )) as BatchType;
    setBatches((prev) => [...prev, newBatch]);
    handleClose();
  };

  const showFormhandler = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function getBatches() {
      let fetchedBatches = (await makeApiCall(
        "/batch/",
        {},
        "get",
      )) as BatchType[];
      setBatches([...fetchedBatches]);
    }
    getBatches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box component="div">
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
          onClick={showFormhandler}
          variant="contained"
          color="primary"
          text="Add Batch"
        />
      </Stack>
      <Grid wrap="wrap" rowSpacing={7} container>
        {filteredData?.map((el) => (
          <Grid key={el._id} item lg={3} md={4} sm={6} xs={12}>
            <Card
              color="#B5DCFF"
              path={`${rootRoute.admin}/${el._id}`}
              name={el.name}
            >
              <BoxIcon
                style={{ height: "30px", width: "30px", color: "#B5DCFF" }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <ModalContainer open={open} handleClose={handleClose}>
        {" "}
        <AddBatchForm
          heading={"Add New Batch"}
          handleClose={handleClose}
          addBatchHandler={addBatchHandler}
        />
      </ModalContainer>
    </Box>
  );
};

export default Batches;
