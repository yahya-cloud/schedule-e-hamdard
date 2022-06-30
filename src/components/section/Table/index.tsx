import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { StudentSchemaType } from "../../../@types/userContext";

// const columns: GridColDef[] = [
//   {
//     field: "id",
//     headerName: "SN.",
//     width: 100,
//     headerAlign: "center",
//     align: "center",
//   },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 87 },
//   { id: 6, lastName: "Melisandre", firstName: "Bitch", age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

interface Props {
  columns: GridColDef[];
  rows: any[];
}

const BasicTable = ({ columns, rows }: Props) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={{
          fontSize: "1.5rem",

          //   "& .MuiDataGrid-columnHeaderTitle": {
          //     fontSize: "1.3rem",
          //   },
        }}
        hideFooter
        rows={rows}
        columns={columns}
      />
    </div>
  );
};

export default BasicTable;
