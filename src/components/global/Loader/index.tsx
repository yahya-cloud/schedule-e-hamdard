import React, { useContext } from "react";
import { Box, Modal } from "@mui/material";
import UserContextType from "../../../@types/userContext";
import { UserContext } from "../../../contexts/userContext";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Grid } from "react-loader-spinner";

const Loader = () => {
  const { loading } = useContext(UserContext) as UserContextType;
  console.log(loading);

  return (
    <Modal
      sx={{ backgroundColor: "#43b47c", "&:MuiBackdrop-root": { zIndex: 5 } }}
      open={loading}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          "&:focus-visible": { outline: "none" },
        }}>
        <Grid height="200" width="200" color="#b5dcff" ariaLabel="loading" />
      </Box>
    </Modal>
  );
};

export default Loader;
