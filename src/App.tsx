import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import ContactSection from "./components/ContactSection";
import SkillsSection from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { MilestonesSection } from "./components/MilestonesSection";
import AboutSection from "./components/AboutSection";

export default function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: "#dae6f3ff", // blue
          },
          secondary: {
            main: "#f50057", // pink
          },
          background: {
            default: mode === "dark" ? "transparent" : "#f5f5f5",
            paper: mode === "dark" ? "#1e1e1e" : "#ffffffdf",
          },
        },
        typography: {
          fontFamily: "Roboto, sans-serif",
          h1: {
            fontWeight: 400,
            background: "linear-gradient(45deg, #ff4081 30%, #0181c6ff 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                color: "#f50057",
                backgroundColor: "transparent",
                borderRadius: "none",
                "&:hover": { scale: 1.05, backgroundColor: "#f50057" },
              },
              contained: {
                backgroundColor: "#f50057",
                opacity: 0.9,
                color: "white",
                border: "none",
                "&:hover": {
                  backgroundColor: "#f50057",
                  opacity: 1,
                  color: "#fff",
                },
              },
              outlined: {
                border: "none",
                color: "#f50057",
                "&:hover": {
                  border: "1px solid #f50057",
                  backgroundColor: "transparent",
                  color: "#f50057",
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const bgColor =
    mode === "dark" ? "rgba(10, 10, 25, 0.85)" : "rgba(232, 232, 242, 0.6)";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar toggleTheme={toggleTheme} mode={mode} />
        <Box
          sx={{
            minHeight: "100vh",
            backgroundImage:
              mode === "dark"
                ? `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url("/portfolio/images/background.png")`
                : `url("/portfolio/images/background2.png")`,
            backgroundSize: "100% auto",
            backdropFilter: "blur(10px)",
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
            transition: "background-image 0.3s ease",
          }}
        >
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route
              path="/about"
              element={
                <Box sx={{ backgroundColor: bgColor, minHeight: "100vh" }}>
                  <AboutSection />
                </Box>
              }
            />
            <Route
              path="/skills"
              element={
                <Box sx={{ backgroundColor: bgColor, minHeight: "100vh" }}>
                  <SkillsSection />
                </Box>
              }
            />
            <Route
              path="/projects"
              element={
                <Box sx={{ backgroundColor: bgColor, minHeight: "100vh" }}>
                  <ProjectsSection />
                </Box>
              }
            />
            <Route
              path="/achievements"
              element={
                <Box sx={{ backgroundColor: bgColor, minHeight: "100vh" }}>
                  <AchievementsSection />
                </Box>
              }
            />
            <Route
              path="/milestones"
              element={
                <Box sx={{ backgroundColor: bgColor, minHeight: "100vh" }}>
                  <MilestonesSection />
                </Box>
              }
            />
            <Route
              path="/contact"
              element={
                <Box sx={{ backgroundColor: bgColor, minHeight: "100vh" }}>
                  <ContactSection />
                </Box>
              }
            />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
