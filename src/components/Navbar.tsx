import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";

interface NavbarProps {
  toggleTheme: () => void;
  mode: "light" | "dark";
}

export default function Navbar({ toggleTheme, mode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", section: "home" },
    { label: "About", section: "about" },
    { label: "Experience", section: "experience" },
    { label: "Skills", section: "skills" },
    { label: "Projects", section: "projects" },
    { label: "Achievements", section: "achievements" },
    { label: "Milestones", section: "milestones" },
    { label: "Contact", section: "contact" },
  ];

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const handleScroll = () => {
      const sections = menuItems.map((item) => item.section);
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -70; // Navbar height
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -70; // Navbar height
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar position="fixed" sx={{ height: "70px", justifyContent: "center" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between",backdropFilter: "blur(10px)" }}>
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
            display: { xs: "none", md: "flex", gap: "30px" },
            alignItems: "center",
          }}
        >
          {menuItems.map((item) => (
            <Typography
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              sx={{
                cursor: "pointer",
                position: "relative",
                fontSize: "1rem",
                fontWeight: activeSection === item.section ? "bold" : "normal",
                color: "#f50057",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#f50057",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#f50057",
                  transform:
                    activeSection === item.section ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 0.3s ease",
                },
              }}
            >
              {item.label}
            </Typography>
          ))}
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
                    onClick={() => {
                      scrollToSection(item.section);
                      toggleMobileMenu();
                    }}
                    sx={{
                      "&:hover": {
                        backgroundColor: "rgba(245, 0, 87, 0.05)",
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      sx={{
                        textAlign: "center",
                        position: "relative",
                        "& .MuiTypography-root": {
                          fontWeight:
                            activeSection === item.section ? "bold" : 500,
                          color: mode === "dark" ? "#fff" : "#000",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: activeSection === item.section ? "60%" : "0%",
                          height: "2px",
                          backgroundColor: "#f50057",
                          transition: "width 0.3s ease",
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
