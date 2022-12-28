import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/crud-ws";

export default function ProductList() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => {
      setproducts(data.data);
    });
  }, []);

  const rows = products;
  console.log("soy rows", rows);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Slug</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <>
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="Copy the address and click">
                    <Link to="/sendSolana">{row.name}</Link>
                  </Tooltip>
                </TableCell>
                <TableCell align="right">{row.slug}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
