import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { registerWs } from "../services/crud-ws";
import { Copyright } from "./index";

const theme = createTheme();

export default function RegisterProduct() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    let categoryPost = {
      name: data.get("catName"),
      slug: data.get("catSlug"),
    };

    let brandPost = {
      name: data.get("brandName"),
      slug: data.get("brandSlug"),
    };

    let values = {
      name: data.get("name"),
      status: data.get("status"),
      slug: data.get("slug"),
      category: categoryPost,
      brand: brandPost,
    };

    registerWs(values).then((res) => {
      const { status, errorMessage } = res;
      if (status) {
        navigate("/");
        return;
      } else {
        console.log(errorMessage);
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://i.natgeofe.com/n/e9f83bca-c0cf-447c-bcc4-cc2f421e2669/plaza-mayor-dusk-lima-peru.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Product Registration
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Product Name"
                name="name"
                autoComplete="name"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="catName"
                label="Category Name"
                name="catName"
                autoComplete="catName"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="catSlug"
                label="Category Slug"
                name="catSlug"
                autoComplete="catSlug"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="brandName"
                label="Brand Name"
                name="brandName"
                autoComplete="brandName"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="brandSlug"
                label="Brand Slug"
                name="brandSlug"
                autoComplete="brandSlug"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="slug"
                label="Product Slug"
                name="slug"
                autoComplete="slug"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="status"
                label="Product Status"
                name="status"
                autoComplete="status"
                autoFocus
              />

              <TextField type="hidden" name="category" />
              <TextField type="hidden" name="brand" />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </Button>

              <Container align="center">
                <Link href="/" variant="body2">
                  {"Check all products instead"}
                </Link>
              </Container>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
