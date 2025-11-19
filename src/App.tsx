import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
            paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/portfolio">
        <Navbar toggleTheme={toggleTheme} mode={mode} />
        <Box
          sx={{
            minHeight: "100vh",
            backgroundImage:
              mode === "dark"
                ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url("/portfolio/images/image.png")`
                : `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.9)), url("/portfolio/images/image.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "repeat-y",
            transition: "background-image 0.3s ease",
          }}
        >
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/achievements" element={<AchievementsSection />} />
            <Route path="/milestones" element={<MilestonesSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
