import { List, ListItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <Link to="/claim-list">
            <Typography variant="h6" component="h6" sx={{ flexGrow: 1 }}>
              Insurance Claim System
            </Typography>
          </Link>
          <List>
            <ListItem sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem"
            }}>
              <Link to="/claim-list">Claim List</Link>
              <Link to="/create-claim">Create Claim</Link>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
