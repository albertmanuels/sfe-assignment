import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "../Header";


const AppLayout = () => {
  return (
    <Box sx={{ flex: 1 }}>
      <Header/>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100%",
          minHeight: "100dvh",
          paddingTop: "5rem",
          paddingX: "2rem",
          paddingBottom: "5rem",
        }}
      >
        <Outlet/>
      </Box>
    </Box>
  );
};

export default AppLayout;
