import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

type Props = {
  handleClose: () => void;
};

const Cancel = ({ handleClose }: Props) => {
  return (
    <CancelIcon
      onClick={handleClose}
      style={{
        cursor: "pointer",
        color: "red",
        position: "absolute",
        right: "4px",
        top: "3px",
      }}
    />
  );
};

export default Cancel;
