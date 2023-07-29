import { useQuery } from "react-query";
import { getCustomers } from "../../state/Data";
import { useEffect, useState } from "react";
import { Table } from "../ui";
import Box from "@mui/material/Box";
import TestChart from "./TestChart";
import Button from "@mui/material/Button";

export interface TableColumns {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  action: number;
}

const Dashboard = () => {
  const [rows, setRows] = useState<TableColumns[]>([]);

  const { isLoading, data: customers } = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
  });

  useEffect(() => {
    if (customers && customers.users) {
      const values = customers.users.reduce(
        (prev: TableColumns[], current: TableColumns) => {
          return prev.concat({
            id: current.id,
            firstName: current.firstName,
            lastName: current.lastName,
            email: current.email,
            gender: current.gender,
            action: current.id,
          });
        },
        []
      );
      setRows(values);
    }
  }, [customers]);

  const columns = getCustomersColumn();

  // if (status === "loading") return <h3>loading...</h3>;
  // if (status === "error") return <h3>{JSON.stringify(error)}</h3>;
  return (
    <Box>
      <Table
        rows={rows}
        columns={columns}
        header="Customer List"
        isFetching={isLoading}
      />
      <TestChart />
    </Box>
  );
};

export default Dashboard;

const getCustomersColumn = () => [
  {
    field: "id",
    headerName: "Id",
    flex: 1,
    minWidth: 60,
  },
  {
    field: "firstName",
    headerName: "First Name",
    flex: 2,
    minWidth: 80,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    flex: 2,
    minWidth: 80,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 2,
    minWidth: 80,
  },
  {
    field: "gender",
    headerName: "Gender ",
    flex: 2,
    minWidth: 80,
  },
  {
    field: "action",
    headerName: "View",
    minWidth: 80,
    flex: 2,
    renderCell: () => <Button variant="contained"> View</Button>,
    disableExport: true,
  },
];
