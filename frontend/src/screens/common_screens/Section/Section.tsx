import { Box, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Routes, useParams, Route } from "react-router-dom";
import { SectionContextType } from "../../../@types/global";
import DynamicButton from "../../../components/section/DynamicButton";
import SectionNavbar from "../../../components/section/SectionNavbar";
import { SectionContext } from "../../../contexts/sectionContext";
import { Schedule, Teachers, Students } from "./sub_screens";

const Section = () => {
  const { section, setSectionId, user } = useContext(
    SectionContext,
  ) as SectionContextType;
  const { id } = useParams();

  useEffect(() => {
    if (id) setSectionId(id);
  }, [id, setSectionId]);

  return (
    <Box sx={{ paddingRight: "4rem" }} component="div">
      {section && (
        <Box component="div">
          <Typography variant="h2">
            Section-{section.info.section_name.toUpperCase()},&nbsp;
            {section.info.batch_name}
          </Typography>
          <Stack
            sx={{ height: "5rem", mt: 4, mb: 4 }}
            justifyContent="space-between"
            flexDirection="row"
            alignItems="flex-end"
          >
            <SectionNavbar id={section._id} />
            <DynamicButton id={section._id} userType={user.user_type} />
          </Stack>
          <Routes>
            <Route
              path={`/`}
              element={<Schedule timeTable={section.time_table} />}
            />
            <Route path={`/teachers`} element={<Teachers />} />
            <Route path={`/students`} element={<Students />} />
          </Routes>
        </Box>
      )}
    </Box>
  );
};

export default Section;
