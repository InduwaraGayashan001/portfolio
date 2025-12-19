import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  IconButton,
  useTheme,
} from "@mui/material";
import { GitHub, ChevronLeft, ChevronRight, LinkRounded } from "@mui/icons-material";
import SectionWrapper from "./SectionWrapper";

export const ProjectsSection = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const theme = useTheme();

  const projects = [
    {
      title: "PowerLens - Transformer Maintenance Record Keeper",
      description:
        "AI-assisted transformer inspection platform for thermal anomaly detection with automated digital maintenance reporting",
      image: "/portfolio/images/powerlens.png",
      tech: ["Python", "TypeScript", "React", "Java", "Spring Boot", "MySQL"],
      github:
        "https://github.com/SamudraUduwaka/Transformer-maintenance-record-keeper-team-backslash",
      demo: "#",
    },
    {
      title: "CodeVision AI - Intelligent Source Code Analyzer",
      description:
        "AI-powered web application for intelligent analysis and exploration of GitHub repositories through natural language conversations",
      image: "/portfolio/images/code analyzer.png",
      tech: ["Python", "Flask", "OpenAI", "LangChain", "Bootstrap", "Chroma"],
      github: "https://github.com/InduwaraGayashan001/Source-Code-Analyzer",
      demo: "#",
    },
    {
      title: "MediBot - AI Medical Assistant",
      description:
        "AI-powered medical chatbot providing accurate health information using RAG technology and curated medical knowledge base",
      image: "/portfolio/images/medibot.png",
      tech: ["Python", "Flask", "OpenAI", "LangChain", "Bootstrap", "Pinecone"],
      github: "https://github.com/InduwaraGayashan001/Medical-Chatbot",
      demo: "#",
    },
    {
      title: "Real Estate Booking System",
      description:
        "Real Estate Booking System using MERN stack with integrated chat feature for seamless user interaction",
      image: "/portfolio/images/realstate.png",
      tech: ["JavaScript", "React", "Node.js", "MongoDB"],
      github:
        "https://github.com/InduwaraGayashan001/Real-State-Booking-System",
      demo: "#",
    },
    {
      title: "IntelliPrep - Q&A Creator",
      description:
        "Web application that generates interview-style Q&A pairs from uploaded PDF documents using OpenAI models",
      image: "/portfolio/images/inteliprep.png",
      tech: [
        "Python",
        "FastAPI",
        "OpenAI",
        "LangChain",
        "JavaScript",
        "React",
        "FAISS",
      ],
      github:
        "https://github.com/InduwaraGayashan001/Interview-Questions-Creator",
      demo: "#",
    },
    {
      title: "Ballerina ETL Package",
      description:
        "ETL package providing APIs for data categorization, cleaning, enrichment, filtering, security, and unstructured data extraction",
      image: "/portfolio/images/etl.png",
      tech: ["Ballerina", "Java", "OpenAI"],
      github: "https://github.com/ballerina-platform/module-ballerina-etl",
      demo: "#",
    },
    {
      title: "RFID Based Inventory Management System",
      description:
        "RFID-based inventory management system enabling automated tracking and real-time inventory updates",
      image: "/portfolio/images/rfid.png",
      tech: ["JavaScript", "React", "Java", "Spring Boot", "MySQL"],
      github:
        "https://github.com/InduwaraGayashan001/RFID-Based-Inventory-Managemet-System-",
      demo: "#",
    },
    {
      title: "Vision Based Label Placement Verification",
      description:
        "Vision-based system using YOLOv8 to detect misprinted labels with automated rejection of faulty products",
      image: "/portfolio/images/detection.png",
      tech: ["Python", "YOLOv8", "C++", "Altium", "SolidWorks"],
      github:
        "https://github.com/InduwaraGayashan001/Misprinted-Label-Detection",
      demo: "#",
    },
    {
      title: "SelfoDryer - Sun-Seeking Solar Dryer Robot",
      description:
        "Autonomous solar dryer robot with sun-tracking mechanism, distance sensors for obstacle avoidance, and automated drying optimization",
      image: "/portfolio/images/selfo.png",
      tech: ["Arduino", "Altium", "SolidWorks"],
      github:
        "https://www.linkedin.com/posts/induwara-gayashan-78812a277_innovation-engineering-teamwork-activity-7116061212747984896-S9nK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEN45dgBN2vfSFSzJQauYp7PjTC9ErqUYRo",
      demo: "#",
    },
    {
      title: "High Frequency Power Amplifier",
      description:
        "RF power amplifier design with impedance matching networks, biasing circuits, and harmonic analysis for optimal performance",
      image: "/portfolio/images/highf.jpg",
      tech: ["Altium", "Solidworks"],
      github:
        "https://www.linkedin.com/posts/induwara-gayashan-78812a277_analogproject-electronics-highfrequencyamplifier-activity-7166884275240251392-_tSb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEN45dgBN2vfSFSzJQauYp7PjTC9ErqUYRo",
      demo: "#",
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setProjectIndex((prev) => (prev + 1) % projects.length);
      }, 5000); // Auto-slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [projectIndex, isPaused, projects.length]);

  const handleNext = () => {
    setProjectIndex((prev) => (prev + 1) % projects.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000); // Pause for 10 seconds after manual navigation
  };

  const handlePrev = () => {
    setProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000); // Pause for 10 seconds after manual navigation
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
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
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
                      <LinkRounded sx={{ fontSize: "18px" }} />
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
                        sx={{
                          backgroundColor: "transparent",
                          color: theme.palette.text.primary,
                          border: `1px solid ${theme.palette.text.primary}`,
                        }}
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
                  p: 2,
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
                      sx={{
                        backgroundColor: "transparent",
                        color: theme.palette.text.primary,
                        border: `1px solid ${theme.palette.text.primary}`,
                      }}
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
