//@ts-noCheck
import React from "react";
import { Stack } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const columns = (
  userType: string | undefined,
  deleteTeacher: (teacherId: string) => Promise<void>,
  viewTeacher: (teacherId: string) => void,
): GridColDef[] => {
  let password = {
    field: "password",
    headerName: "Password",
    type: "number",
    width: 160,
    headerAlign: "center",
    align: "center",
  };

  return [
    {
      field: "id",
      headerName: "SN.",
      width: 80,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "unique_id",
      headerName: "Unique Id",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 170,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      type: "string",
      width: 170,
      headerAlign: "center",
      align: "center",
    },

    ...(userType === "admin" ? [password] : []),
    {
      field: "action",
      headerName: "Actions",
      sortable: false,
      width: 140,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <Stack flexDirection="row">
            <EditIcon
              sx={{
                cursor: "pointer",
                color: "#43B47C",
                fontSize: "2rem",
                mr: "4px",
              }}
            />
            <DeleteIcon
              onClick={() => deleteTeacher(params.row._id)}
              color={"error"}
              sx={{ cursor: "pointer", fontSize: "2rem" }}
            />
          </Stack>
        );
      },
    },
    {
      field: "view",
      headerName: "View",
      sortable: false,
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <Button
            onClick={() => viewTeacher(params.row._id)}
            sx={{
              "&:hover": { backgroundColor: "#00B1E4" },
              backgroundColor: "#00B1E4",
              color: "#fff",
              fontSize: "1.2rem",
            }}
            variant="contained"
          >
            View
          </Button>
        );
      },
    },
  ];
};

export default columns;
