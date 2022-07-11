import React, { useContext } from "react";
import { Stack, Box, Typography, useTheme, Theme } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import person from "../../../assets/images/person.png";
import { UserContext } from "../../../contexts/userContext";
import UserContextType from "../../../@types/userContext";
import {
  StyledActionContainer,
  StyledColorBox,
  StyledImageBox,
  StyledPaperContainer,
} from "./styles";

type Props = {
  color: string;
  info: {
    name: string;
    subject: string;
    email: string;
    phone_number: number;
  };
  deleteTeacher: () => void;
};

const TeacherCard = ({ color, info, deleteTeacher }: Props) => {
  const theme: Theme = useTheme();
  const { user } = useContext(UserContext) as UserContextType;

  return (
    <StyledPaperContainer elevation={2}>
      <StyledColorBox
        sx={{
          backgroundColor: `${color}`,
        }}
      ></StyledColorBox>
      <Stack
        width={"100%"}
        component="div"
        flexDirection={"row"}
        alignItems="stretch"
      >
        <StyledImageBox
          sx={{
            backgroundImage: `url(${person})`,
          }}
          component={"div"}
        ></StyledImageBox>
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
      {user?.user_type === "admin" && (
        <StyledActionContainer>
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
        </StyledActionContainer>
      )}
    </StyledPaperContainer>
  );
};

export default TeacherCard;
