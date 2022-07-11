import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";

type Props = {
  heading: string;
  detail: string;
};
const Info = ({ heading, detail }: Props) => {
  const theme = useTheme();
  return (
    <Stack>
      <Typography
        sx={{ color: `${theme.palette.fourth?.tertiary}` }}
        variant="h6"
      >
        {heading}
      </Typography>
      <Typography sx={{ mt: 1, color: `${theme.palette.fourth}` }} variant="h5">
        {detail}
      </Typography>
    </Stack>
  );
};

export default Info;
