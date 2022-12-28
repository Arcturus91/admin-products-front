import { Copyright } from "../components";
import { ProductList } from "../components";
import Typography from "@mui/material/Typography";

const HomePage = () => {
  return (
    <>
      <Typography variant="h3" className="App-header">
        Technical Test Delfosti
      </Typography>
      <ProductList />
      <Copyright />
    </>
  );
};

export default HomePage;
