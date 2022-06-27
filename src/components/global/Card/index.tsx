import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { RoundDiv } from "./styles";
import BoxIcon from "../../../assets/svg/boxIcon.svg";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  name: string;
  path: string;
  color: string;
  children: React.ReactNode;
}

const BatchCard = ({ color, name, path, children }: Props) => {
  const navigate = useNavigate();
  return (
    // <Paper sx={{ borderRadius: "10px" }}>
    <Card sx={{ width: "270px" }}>
      <CardActionArea onClick={() => navigate(path)}>
        <CardContent>
          <Stack
            spacing={1}
            height={"100%"}
            direction="column"
            alignItems={"center"}
            justifyContent={"space-between"}>
            <RoundDiv style={{ borderColor: color }}>{children}</RoundDiv>
            <Typography variant="h5" component={"h5"}>
              {name}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
    // </Paper>
  );
};

export default BatchCard;
