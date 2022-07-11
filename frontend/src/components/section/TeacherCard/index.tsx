import React, { useContext } from "react";
import { Paper, Stack, Box, Typography, useTheme, Theme } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import person from "../../../assets/images/person.png";
import { UserContext } from "../../../contexts/userContext";
import UserContextType from "../../../@types/userContext";

interface Props {
  color: string;
  info: {
    name: string;
    subject: string;
    email: string;
    phone_number: number;
  };
  deleteTeacher: () => void;
}

const TeacherCard = ({ color, info, deleteTeacher }: Props) => {
  const theme: Theme = useTheme();
  const { user } = useContext(UserContext) as UserContextType;

  return (
    <Paper
      sx={{
        boxSizing: "border-box",
        position: "relative",
        borderRadius: "1.6rem",
        height: "19rem",
        padding: "4rem 3rem",
      }}
      elevation={2}
    >
      <Box
        sx={{
          borderRadius: "1.6rem 0 1.6rem 0",
          backgroundColor: `${color}`,
          height: "2.5rem",
          width: "4.5rem",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></Box>
      <Stack
        width={"100%"}
        component="div"
        flexDirection={"row"}
        alignItems="stretch"
      >
        <Box
          sx={{
            height: "10rem",
            width: "10rem",
            borderRadius: "50%",
            border: "1px solid green",
            backgroundSize: "contain",
            backgroundImage: `url(${person})`,
            backgroundColor: "#ebebeb",
          }}
          component={"div"}
        ></Box>{" "}
        <Stack marginLeft={"2rem"} justifyContent={"space-between"}>
          {Object.keys(info).map((el) => (
            <Box
              key={el}
              sx={{ display: "flex", alignItems: "flex-end" }}
              component="div"
            >
              <Typography color={theme.palette!.fourth!.tertiary} variant="h5">
                {el.slice(0, 1).toUpperCase()}
                {el.slice(1)}:
              </Typography>
              <Typography sx={{ ml: 2 }} color={"#000"} variant="h5">
                {/* @ts-ignore */}
                {info[el]}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
      {user.user_type === "admin" && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            bottom: 15,
            right: 20,
            height: "2rem",
            width: "5rem",
          }}
        >
          <EditIcon
            sx={{
              cursor: "pointer",
              color: theme!.palette!.primary!.main,
              fontSize: "2rem",
            }}
          />
          <DeleteIcon
            onClick={deleteTeacher}
            color={"error"}
            sx={{ cursor: "pointer", fontSize: "2rem" }}
          />
        </Box>
      )}
    </Paper>
  );
};

export default TeacherCard;
