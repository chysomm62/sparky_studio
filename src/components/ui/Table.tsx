/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataGrid, GridToolbarExport } from "@mui/x-data-grid";
import { FC, useEffect, useState } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const escapeRegExp = (value: any) => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

interface TableProps {
  rows: any[];
  columns: any[];
  header: string;
  isFetching?: boolean;
  height?: string;
}

const Table: FC<TableProps> = ({
  rows,
  columns,
  header,
  isFetching = false,
  height = "600px",
}) => {
  const [searchText, setSearchText] = useState("");
  const [tempRows, setTempRows] = useState<any>(rows);

  useEffect(() => {
    if (rows) {
      setTempRows(rows);
    }
  }, [rows]);

  const requestSearch = (searchValue: string) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = rows.filter((row: any) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row && row[field] ? row[field].toString() : "");
      });
    });
    setTempRows(filteredRows);
  };

  if (isFetching) {
    return (
      <Box sx={{ border: "1px solid #E0E0E0", minHeight: height, p: 3 }}>
        <Toolbar />
        <Divider sx={{ mb: 3 }} />
        {Array.from(Array(5)).map((_, index) => (
          <Skeleton
            key={`skel-${index}`}
            sx={{ mb: 1 }}
            variant="rectangular"
            height={65}
          />
        ))}
      </Box>
    );
  }

  return (
    <Box sx={{ height: height, width: "100%", backgroundColor: "#fff" }}>
      <DataGrid
        sx={{
          px: 3,
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#F3F5F9",
          },
          "& .MuiDataGrid-cell": {
            fontSize: 14,
            lineHeight: "20px",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
          },
          "& .MuiTablePagination-displayedRows": {
            fontSize: 14,
            lineHeight: "20px",
          },
        }}
        rows={tempRows}
        columns={columns}
        slots={{
          toolbar: QuickSearchToolbar,
        }}
        slotProps={{
          toolbar: {
            value: searchText,
            onChange: (event: any) => {
              requestSearch(event.target.value);
            },
            clearSearch: () => requestSearch(""),
            data: tempRows,
            header,
          },
        }}
        pageSizeOptions={[5, 10, 15]}
        initialState={{
          pagination: { paginationModel: { pageSize: 7 } },
        }}
      />
    </Box>
  );
};

export default Table;

interface QuickSearchToolbarProps {
  clearSearch: any;
  onChange: any;
  value: any;
  data: any;
  header: string;
}

const QuickSearchToolbar: FC<QuickSearchToolbarProps> = (props) => {
  return (
    <Box sx={{ py: 3 }}>
      <Grid alignItems="center" container>
        <Grid xs item>
          <Typography className="fs-14-20" variant="h3">
            {props.header} ({props.data ? props.data.length : 0})
          </Typography>
        </Grid>
        <Grid
          xs
          spacing={2}
          alignItems="center"
          justifyContent="flex-end"
          item
          container
        >
          <Grid item>
            <TextField
              variant="outlined"
              value={props.value}
              size="small"
              onChange={props.onChange}
              placeholder="Search…"
              inputProps={{ sx: { fontSize: 14 } }}
              InputProps={{
                startAdornment: (
                  <SearchIcon sx={{ color: "#acb2b4" }} fontSize="small" />
                ),
                endAdornment: (
                  <IconButton
                    title="Clear"
                    aria-label="Clear"
                    size="small"
                    style={{ visibility: props.value ? "visible" : "hidden" }}
                    onClick={props.clearSearch}
                  >
                    <ClearIcon fontSize="small" />
                  </IconButton>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <GridToolbarExport />
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ borderBottom: "1px solid #E8E8E8", mt: 3 }} />
    </Box>
  );
};
