import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

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
