import * as React from "react";
import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material/";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

//


const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl" spacing={2}>
        <Toolbar
          variant="dense"
          disableGutters
          sx={{ flex: "display", justifyContent: "left" }}
        >
          <div>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="Nav-Bar">
              <Button
                  variant="contained"
                  endIcon={<HomeIcon />}
                >
                  Home
                </Button>
              </div>
            </Link>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: 10 }}>
              <Link
                to="/newproduct"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  variant="contained"
                  endIcon={<LoginIcon />}
                  disableRipple
                >
                  New Product
                </Button>
              </Link>
            </div>
 
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
