import React, { useContext } from "react";
import { Modal } from "@mui/material";
import UserContextType from "../../../@types/userContext";
import { UserContext } from "../../../contexts/userContext";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Grid } from "react-loader-spinner";
import { StyledBox } from "./styles";

const Loader = () => {
  const { loading } = useContext(UserContext) as UserContextType;

  return (
    <Modal
      sx={{
        backgroundColor: "#43b47c",
        "& .MuiBackdrop-root": { backgroundColor: "rgba(0, 0, 0, 0.3)" },
      }}
      open={loading}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox>
        <Grid height="150" width="150" color="#fff" ariaLabel="loading" />
      </StyledBox>
    </Modal>
  );
};

export default Loader;
