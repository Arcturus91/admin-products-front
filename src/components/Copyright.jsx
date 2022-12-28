import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center" style={{marginTop:10}}>
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/Arcturus91/">
          Delfosti
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }