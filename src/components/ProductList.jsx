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
import TextField from "@mui/material/TextField";
import NorthIcon from "@mui/icons-material/North";

export default function ProductList() {
  const [products, setproducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    getAllProducts().then((data) => {
      setproducts(data.data);
    });
  }, []);

  function sortByName() {
    const productsCopy = [...products];
    setproducts(productsCopy.sort((a, b) => a.name.localeCompare(b.name)));
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  const filteredData = products.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rows = filteredData;

  return (
    <>
      <form style={{ marginTop: 50 }}>
        <TextField
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          variant="outlined"
          color="primary"
          focused
          label="Search product by name"
        />
      </form>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell align="center">
                Name
                <Button onClick={() => sortByName()}>
                  <NorthIcon />
                </Button>
              </TableCell>
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
                      <Link
                        style={{ textDecoration: "none", color: "inherit" }}
                        to={`/productupdate/${row._id}`}
                      >
                        Update
                      </Link>
                    </Button>
                    <DeleteButton id={row._id} />
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
