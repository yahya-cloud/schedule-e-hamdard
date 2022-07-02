import React, { useContext } from "react";
import { Box, Modal } from "@mui/material";
import UserContextType from "../../../@types/userContext";
import { UserContext } from "../../../contexts/userContext";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Grid } from "react-loader-spinner";

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
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          "&:focus-visible": { outline: "none" },
        }}
      >
        <Grid height="150" width="150" color="#fff" ariaLabel="loading" />
      </Box>
    </Modal>
  );
};

export default Loader;
