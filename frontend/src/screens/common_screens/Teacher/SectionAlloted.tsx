import React from "react";
import { Grid, Typography } from "@mui/material";
import { SectionType } from "../../../@types/global";
import { SectionAllotedContainer, StyledTypography } from "./styles";

type Props = {
  sections: SectionType[] | null | undefined;
};

const SectionAlloted = (props: Props) => {
  return (
    <Grid item md={8}>
      <Typography sx={{ mb: 2, color: "#848484" }} variant="h5">
        Section Alloted
      </Typography>
      <SectionAllotedContainer elevation={2}>
        <Grid container spacing={3}>
          {props.sections?.map((el) => {
            return (
              <Grid key={el._id} item md={4}>
                <StyledTypography variant="h6" align="center" component="div">
                  {el.info.section_name.toUpperCase()}-{el.info.batch_name}
                </StyledTypography>
              </Grid>
            );
          })}
        </Grid>
      </SectionAllotedContainer>
    </Grid>
  );
};

export default SectionAlloted;
