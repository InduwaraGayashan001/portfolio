import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  IconButton,
  useTheme,
} from "@mui/material";
import { GitHub, ChevronLeft, ChevronRight } from "@mui/icons-material";
import SectionWrapper from "./SectionWrapper";

export const ProjectsSection = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const theme = useTheme();

  const projects = [
    {
      title: "CodeVision AI - Intelligent Source Code Analyzer",
      description:
        "AI-powered web application for intelligent analysis and exploration of GitHub repositories through natural language conversations",
      image: "./images/code analyzer.png",
      tech: ["Python", "LangChain", "Flask", "Chroma", "Bootstrap"],
      github: "https://github.com/InduwaraGayashan001",
      demo: "#",
    },
    {
      title: "MediBot - AI Medical Assistant",
      description:
        "AI-powered medical chatbot providing accurate health information using RAG technology and curated medical knowledge base",
      image: "./images/medibot.png",
      tech: ["Python", "LangChain", "Flask", "Pinecone", "Bootstrap"],
      github: "https://github.com/InduwaraGayashan001",
      demo: "#",
    },
    {
      title: "IntelliPrep - AI-Powered Interview Coach",
      description:
        "AI-based interview preparation platform with simulated interviews, real-time CV analysis, and personalized feedback for job seekers",
      image: "./images/inteliprep.png",
      tech: ["Python", "LangChain", "Flask", "MongoDB", "Bootstrap"],
      github: "https://github.com/InduwaraGayashan001",
      demo: "#",
    },
    {
      title: "Real Estate Booking System",
      description:
        "Real Estate Booking System using MERN stack with integrated chat feature for seamless user interaction",
      image: "./images/realstate.png",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/InduwaraGayashan001",
      demo: "#",
    },
    {
      title: "Vision Based Label Placement Verification",
      description:
        "Vision-based system using YOLOv8 to detect misprinted labels with automated rejection of faulty products",
      image: "./images/detection.png",
      tech: ["Python", "YOLOv8", "C++", "Altium", "SolidWorks"],
      github: "https://github.com/InduwaraGayashan001",
      demo: "#",
    },
    {
      title: "SelfoDryer - Sun-Seeking Solar Dryer Robot",
      description:
        "Autonomous solar dryer robot with sun-tracking mechanism, distance sensors for obstacle avoidance, and automated drying optimization",
      image:
        "./images/selfo.png",
      tech: ["Arduino", "C++", "Solar Panels", "Sensors"],
      github: "https://github.com/InduwaraGayashan001",
      demo: "#",
    },
    {
      title: "High Frequency Power Amplifier",
      description:
        "RF power amplifier design with impedance matching networks, biasing circuits, and harmonic analysis for optimal performance",
      image:
        "./images/highf.jpg",
      tech: ["ADS", "Circuit Design", "RF Engineering"],
      github: "https://github.com/InduwaraGayashan001",
      demo: "#",
    },
    {
      title: "Ballerina HubSpot CRM Connector",
      description:
        "WSO2 project: Ballerina connector for HubSpot CRM API integration with comprehensive documentation and test cases",
      image:
        "./images/balc.png",
      tech: ["Ballerina", "HubSpot API", "CRM Integration"],
      github: "https://github.com/InduwaraGayashan001",
      demo: "#",
    },
    {
      title: "Ballerina ETL Package",
      description:
        "WSO2 project: ETL tool for seamless data extraction, transformation, and loading with HubSpot-Salesforce pipeline implementation",
      image: "./images/etl.png",
      tech: ["Ballerina", "ETL", "HubSpot", "Salesforce"],
      github: "https://github.com/InduwaraGayashan001",
      demo: "#",
    },
  ];

  const handleNext = () => {
    setProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const visibleProjectsMobile = [projects[projectIndex]];

  const visibleProjectsDesktop = [
    {
      ...projects[(projectIndex - 1 + projects.length) % projects.length],
      position: "left",
    },
    { ...projects[projectIndex], position: "center" },
    { ...projects[(projectIndex + 1) % projects.length], position: "right" },
  ];

  return (
    <SectionWrapper title="Projects">
      <Box sx={{ maxWidth: "1600px", margin: "0 auto", position: "relative" }}>
        {/* Desktop view - 3 projects with train effect */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            px: 2,
            py: 2,
            minHeight: "450px",
            overflow: "hidden",
          }}
        >
          {visibleProjectsDesktop.map((project, idx) => {
            const isCenter = project.position === "center";
            const isLeft = project.position === "left";
            const isRight = project.position === "right";

            return (
              <Card
                key={`${project.title}-${idx}-${projectIndex}`}
                sx={{
                  width: isCenter ? "450px" : "380px",
                  flexShrink: 0,
                  marginLeft: isLeft ? "-120px" : 0,
                  marginRight: isRight ? "-120px" : 0,
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(30, 30, 30, 0.6)"
                      : "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  overflow: "hidden",
                  border: isCenter
                    ? "2px solid #f50057"
                    : theme.palette.mode === "dark"
                    ? "1px solid rgba(255, 255, 255, 0.1)"
                    : "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "16px",
                  transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  transform: isCenter
                    ? "scale(1.05) translateY(-10px)"
                    : "scale(0.92)",
                  filter:
                    isCenter || theme.palette.mode !== "dark"
                      ? "none"
                      : "brightness(0.75)",
                  boxShadow: isCenter
                    ? "0 16px 48px rgba(245, 0, 87, 0.4)"
                    : theme.palette.mode === "dark"
                    ? "0 4px 12px rgba(0, 0, 0, 0.3)"
                    : "0 4px 12px rgba(0, 0, 0, 0.1)",
                  zIndex: isCenter ? 10 : 1,
                  position: "relative",
                  "&::after": isCenter
                    ? {}
                    : theme.palette.mode === "dark"
                    ? {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: isLeft
                          ? "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.5) 40%, transparent 70%)"
                          : "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.5) 40%, transparent 70%)",
                        pointerEvents: "none",
                        zIndex: 2,
                      }
                    : {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: isLeft
                          ? "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 20%, rgba(255,255,255,0.5) 40%, transparent 70%)"
                          : "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 20%, rgba(255,255,255,0.5) 40%, transparent 70%)",
                        pointerEvents: "none",
                        zIndex: 2,
                      },
                  animation:
                    "trainSlide 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  "@keyframes trainSlide": {
                    from: {
                      opacity: 0,
                      transform: isCenter
                        ? "scale(1.05) translateX(50px) translateY(-10px)"
                        : "scale(1) translateX(50px)",
                    },
                    to: {
                      opacity: 1,
                      transform: isCenter
                        ? "scale(1.05) translateY(-10px)"
                        : "scale(0.92) translateX(0)",
                    },
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "100%",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(245,0,87,0.05) 100%)",
                    pointerEvents: "none",
                  },
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    p: 2,
                  }}
                />
                <CardContent sx={{ p: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 1,
                      minHeight: "40px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1rem",
                        flex: 1,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <IconButton
                      href={project.github}
                      target="_blank"
                      size="small"
                      sx={{
                        backgroundColor: "rgba(245, 0, 87, 0.1)",
                        color: "#f50057",
                        "&:hover": {
                          backgroundColor: "rgba(245, 0, 87, 0.2)",
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <GitHub sx={{ fontSize: "18px" }} />
                    </IconButton>
                  </Box>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{
                      fontSize: "12px",
                      color: theme.palette.text.secondary,
                      minHeight: "38px",
                      mb: 1,
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.5,
                      mb: 1,
                      minHeight: "40px",
                    }}
                  >
                    {project.tech.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{ backgroundColor: "transparent", color: theme.palette.text.primary, border: `1px solid ${theme.palette.text.primary}` }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        {/* Mobile view - 1 project */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            px: 2,
            transition: "all 0.5s ease-in-out",
          }}
        >
          {visibleProjectsMobile.map((project, idx) => (
            <Card
              key={`${project.title}-mobile-${idx}`}
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(30, 30, 30, 0.6)"
                    : "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                overflow: "hidden",
                border:
                  theme.palette.mode === "dark"
                    ? "1px solid rgba(255, 255, 255, 0.1)"
                    : "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "16px",
                transition: "all 0.5s ease-in-out",
                animation: "slideIn 0.5s ease-in-out",
                "@keyframes slideIn": {
                  from: { opacity: 0, transform: "translateX(30px)" },
                  to: { opacity: 1, transform: "translateX(0)" },
                },
                "&:hover": {
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(30, 30, 30, 0.8)"
                      : "rgba(255, 255, 255, 0.95)",
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 40px rgba(245, 0, 87, 0.3)",
                  border: "1px solid rgba(245, 0, 87, 0.4)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "100%",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(245,0,87,0.05) 100%)",
                  pointerEvents: "none",
                },
              }}
            >
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  p:2,
                }}
              />
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 2,
                    minHeight: "64px",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: "bold", flex: 1 }}
                  >
                    {project.title}
                  </Typography>
                  <IconButton
                    href={project.github}
                    target="_blank"
                    sx={{
                      color: "#f50057",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <GitHub sx={{ fontSize: "24px" }} />
                  </IconButton>
                </Box>
                <Typography
                  variant="body2"
                  paragraph
                  sx={{
                    fontSize: "14px",
                    color: theme.palette.text.secondary,
                    minHeight: "60px",
                  }}
                >
                  {project.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    mb: 2,
                    minHeight: "60px",
                  }}
                >
                  {project.tech.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{ backgroundColor: "transparent", color: theme.palette.text.primary, border: `1px solid ${theme.palette.text.primary}` }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(245, 0, 87, 0.9)",
            "&:hover": { backgroundColor: "#f50057" },
            display: { xs: "none", md: "flex" },
            zIndex: 100,
          }}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(245, 0, 87, 0.9)",
            "&:hover": { backgroundColor: "#f50057" },
            display: { xs: "none", md: "flex" },
            zIndex: 100,
          }}
        >
          <ChevronRight />
        </IconButton>
        <Box
          sx={{
            textAlign: "center",
            mt: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <IconButton
            onClick={() =>
              setProjectIndex(
                (prev) => (prev - 1 + projects.length) % projects.length
              )
            }
            sx={{ display: { md: "none" } }}
          >
            <ChevronLeft />
          </IconButton>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            {projects.map((_, index) => (
              <Box
                key={index}
                component="span"
                sx={{
                  display: "inline-block",
                  width: projectIndex === index ? 12 : 8,
                  height: projectIndex === index ? 12 : 8,
                  borderRadius: "50%",
                  backgroundColor:
                    projectIndex === index
                      ? "#f50057"
                      : theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.3)"
                      : "rgba(0, 0, 0, 0.3)",
                  mx: 0.25,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#f50057",
                  },
                }}
                onClick={() => setProjectIndex(index)}
              />
            ))}
          </Box>
          <IconButton
            onClick={() =>
              setProjectIndex((prev) => (prev + 1) % projects.length)
            }
            sx={{ display: { md: "none" } }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>
    </SectionWrapper>
  );
};
