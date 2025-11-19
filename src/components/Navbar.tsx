import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

interface NavbarProps {
  toggleTheme: () => void;
  mode: "light" | "dark";
}

export default function Navbar({ toggleTheme, mode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Achievements", path: "/achievements" },
    { label: "Milestones", path: "/milestones" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar position="fixed" sx={{ height: "70px", justifyContent: "center" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              background: "linear-gradient(45deg, #FF4081 30%, #0181c6ff 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              fontFamily: '"Brush Script MT"',
              fontSize: { xs: "2.5rem", md: "4rem" },
              transform: "rotate(-5deg)",
              ml: { xs: 2, md: 8 },
            }}
          >
            Induwara
          </Typography>
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
          <IconButton
            onClick={toggleTheme}
            color="inherit"
            sx={{
              border: "1px solid #f50057",
              "&:hover": {
                backgroundColor: "rgba(245, 0, 87, 0.1)",
              },
            }}
          >
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <IconButton
            onClick={toggleMobileMenu}
            color="inherit"
            sx={{
              border: "1px solid #f50057",
              "&:hover": {
                backgroundColor: "rgba(245, 0, 87, 0.1)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex", gap: "20px" },
            alignItems: "center",
          }}
        >
          <Button component={Link} to="/" variant="outlined">
            Home
          </Button>
          <Button component={Link} to="/about" variant="outlined">
            About
          </Button>
          <Button component={Link} to="/skills" variant="outlined">
            Skills
          </Button>
          <Button component={Link} to="/projects" variant="outlined">
            Projects
          </Button>
          <Button component={Link} to="/achievements" variant="outlined">
            Achievements
          </Button>
          <Button component={Link} to="/milestones" variant="outlined">
            Milestones
          </Button>
          <Button component={Link} to="/contact" variant="outlined">
            Contact
          </Button>
          <IconButton
            onClick={toggleTheme}
            color="inherit"
            sx={{
              ml: 2,
              border: "1px solid #f50057",
              "&:hover": {
                backgroundColor: "rgba(245, 0, 87, 0.1)",
              },
            }}
          >
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={toggleMobileMenu}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              width: "250px",
              backgroundColor:
                mode === "dark"
                  ? "rgba(30, 30, 30, 0.98)"
                  : "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(10px)",
            },
          }}
        >
          <Box sx={{ pt: 3 }}>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                mb: 3,
                background:
                  "linear-gradient(45deg, #FF4081 30%, #0181c6ff 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
                fontFamily: '"Brush Script MT"',
                fontSize: "2rem",
              }}
            >
              Menu
            </Typography>
            <List>
              {menuItems.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    onClick={toggleMobileMenu}
                    sx={{
                      "&:hover": {
                        backgroundColor: "rgba(245, 0, 87, 0.1)",
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      sx={{
                        textAlign: "center",
                        "& .MuiTypography-root": {
                          fontWeight: 500,
                          color: mode === "dark" ? "#fff" : "#000",
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
