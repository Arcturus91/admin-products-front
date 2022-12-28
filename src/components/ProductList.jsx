import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/crud-ws";
import DeleteButton from "./DeleteButton";

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
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Brand</TableCell>
            <TableCell align="center">Slug</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Update / Delete</TableCell>
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
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.category.name}</TableCell>
                <TableCell align="center">{row.brand.name}</TableCell>
                <TableCell align="center">{row.slug}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">
                  <Button variant="outlined">
                    <Link style={{textDecoration:"none",color:"inherit"}} to={`/productupdate/${row._id}`}>Update</Link>
                  </Button>
                  <DeleteButton id={row._id} />
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
