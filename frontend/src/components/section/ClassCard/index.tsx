import React, { useContext } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { getRGBA } from "../../../lib/section";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../../contexts/userContext";
import UserContextType from "../../../@types/userContext";

interface Props {
  color: string;
  title: string;
  description: string;
  start: Date;
  end: Date;
  deleteClass: () => void;
}

const ClassCard = (props: Props) => {
  let backgroundColor = getRGBA(props.color);
  let { pathname } = useLocation();
  const { user } = useContext(UserContext) as UserContextType;

  let showBtn = pathname.includes("/section/") && user.user_type === "teacher";

  return (
    <Paper
      sx={{
        position: "relative",
        boxShadow: "none",
        border: `1px solid ${props.color}`,
        backgroundColor: backgroundColor,
        width: "26rem",
        minHeight: "7rem",
        mt: 3,
        padding: "1.5rem 1rem 0rem 1rem",
        color: props.color,
      }}
      component="div"
    >
      <Stack
        alignItems={"flex-end"}
        justifyContent={"space-between"}
        direction="row"
        width={"100%"}
      >
        <Typography variant="h4">{props.title}</Typography>
        <Typography variant="h6">
          {new Date(props.start).getHours()}- {new Date(props.end).getHours()}
        </Typography>
      </Stack>{" "}
      <Typography sx={{ mt: 0.3 }} variant="subtitle1">
        {props.description}
      </Typography>
      {showBtn && (
        <DeleteIcon
          onClick={props.deleteClass}
          sx={{
            cursor: "pointer",
            bottom: "10px",
            position: "absolute",
            right: "5px",
            mt: "7px",
          }}
          color={"error"}
        />
      )}
    </Paper>
  );
};

export default ClassCard;
