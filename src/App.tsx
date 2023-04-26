import NavBar from "./Components/NavBar";
import MainRouter from "./Router/MainRouter";
import { Box, CssBaseline } from "@mui/material";

function App() {
  return (
    <Box sx={{ backgroundColor: "#0E1116", height: "100%", paddingY: "150px" }}>
      <CssBaseline />
      <NavBar />
      <MainRouter />
    </Box>
  );
}

export default App;
