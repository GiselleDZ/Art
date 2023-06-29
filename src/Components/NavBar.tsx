import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link, RouteObject } from "react-router-dom";
import routes from "../Router/routes";

interface NavBarProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const NavBar = ({ window }: NavBarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();

  const drawerWidth = 240;
  const navItems = routes.filter(
    (route: RouteObject) => route.path && route.path?.length > 1
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      pl={3}
      sx={{
        textAlign: "center",
        width: "100%",
        height: "100%",
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" sx={{ my: 2 }}>
        g z
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path}>
            <Link to={`${item.path}`} style={{textDecoration: "none"}}>
                <Typography variant="h2">{item.path?.slice(1)}</Typography>
             
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar>
        <Toolbar>
            <MenuIcon  aria-label="Open drawer"
            onClick={handleDrawerToggle}
            sx={{mr: 2, display: { sm: "none" }, 
            color: theme.palette.mode === "dark" ? "#D1BCE3" : "#0E1116", }}
            />
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: { sm: "space-between" },
              alignItems: { sm: "center" },
              width: "100%",
            }}
          >
            <Link to="/home" style={{textDecoration: "none"}}>
                <Typography
                  variant="h1"
                  sx={{
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  g zatonyl
                </Typography>
            </Link>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Link to={`${item.path}`} key={item.path} style={{textDecoration: "none"}}>
                    <Typography variant="h3" mr={2}>
                      {item.path?.slice(1)}
                    </Typography>
                </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              opaciy: 1,
              backgroundColor:
                theme.palette.mode === "dark" ? "#0E1116" : "#D1BCE3",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavBar;
