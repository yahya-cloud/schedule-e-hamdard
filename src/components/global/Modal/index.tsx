import React from "react";
import { Box, Modal } from "@mui/material";

interface Props {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const ModalContainer = ({ open, handleClose, children }: Props) => {
  return (
    <Modal
      sx={{ "& .MuiBox-root:focus-visible": { outline: "none" } }}
      open={open}
      onClose={handleClose}>
      <Box component={"div"}>{children}</Box>
    </Modal>
  );
};

export default ModalContainer;
