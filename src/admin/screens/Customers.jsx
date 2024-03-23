import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SearResultList from "../components/SearResultList";

const columns = [
  { id: "firstName", label: "Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 170 },
  { id: "address", label: "Address", minWidth: 170 },
  { id: "phone", label: "Phone", minWidth: 170 },
  { id: "role", label: "Role", minWidth: 80 },
  // { id: 'birthdate', label: 'Birth', minWidth: 100 },
  // { id: 'username', label: 'User', minWidth: 100 },
  // { id: 'password', label: 'Password', minWidth: 100 },
  // { id: 'payment', label: 'Payment', minWidth: 100 },
];

//   function createData(name, code, population, size) {
//     const density = population / size;
//     return { name, code, population, size, density };
//   }
function createData(
  name,
  email,
  address,
  phone,
  birthdate,
  username,
  password,
  payment
) {
  return {
    name,
    email,
    address,
    phone,
    birthdate,
    username,
    password,
    payment,
  };
}

const rows = [];

const Customers = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const customers = useLoaderData();
  // console.log(customers);
  const [customer, setCustomer] = useState(customers);
  const [query, setQuery] = useState("");
  const [result,setResults] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/user/search?q=${query}`,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ query: query })
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setSearchResult(data);
    } catch (error) {
      console.error("Error searching users:", error);
    }
  };


  return (
    <Paper
      className="m-[20px] mt-[100px]"
      sx={{ width: "100%", overflow: "hidden" }}
    >
      <div>
        <SearchBar setResult={setResults} />
        {result && result.length > 0 && <SearResultList result={result} /> }
      </div>
      {/* <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {customer
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
};

export default Customers;
