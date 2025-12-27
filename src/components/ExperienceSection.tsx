import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  useTheme,
  IconButton,
  Button,
} from "@mui/material";
import SectionWrapper from "./SectionWrapper";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";

export const ExperienceSection = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experience = {
    company: "WSO2 (Pvt) Ltd - Sri Lanka",
    position: "Software Engineer Intern",
    duration: "Dec 2024 – May 2025",
    role: "Worked with the Integration Team, contributing to the Ballerina HubSpot CRM Commerce Carts Connector and the Ballerina ETL package. Gained hands-on experience in Ballerina, ETL pipelines, data integration, Gradle, Java, and OpenAI API integrations.",
    snapshots: [
      "/portfolio/images/wso2-snap1.jpeg",
      "/portfolio/images/wso2-snap2.jpeg",
      "/portfolio/images/wso2t.png",
    ],
    projects: [
      {
        title: "ETL Support for WSO2 Integrator: BI",
        type: "Main Project",
        description:
          "Developed the Ballerina ETL package, providing APIs for data categorization, cleaning, enrichment, filtering, security, and unstructured data extraction, enabling drag-and-drop ETL workflow creation for Ballerina Integrator (BI).",
        image: "/portfolio/images/etl.png",
        techStack: ["Ballerina", "Java", "OpenAI", "Gradle"],
        githubLink:
          "https://github.com/ballerina-platform/module-ballerina-etl",
        ballerinaCentralLink:
          "https://central.ballerina.io/ballerina/etl/0.8.0",
      },
      {
        title: "Ballerina HubSpot CRM Commerce Carts Connector",
        type: "Onboarding Project",
        description:
          "Implemented a Ballerina connector to interact with the HubSpot CRM Commerce Carts API using the OpenAPI specification.",
        image: "/portfolio/images/hubspot.png",
        techStack: ["Ballerina", "OpenAPI Specification"],
        githubLink:
          "https://github.com/ballerina-platform/module-ballerinax-hubspot.crm.commerce.carts",
        ballerinaCentralLink:
          "https://central.ballerina.io/ballerinax/hubspot.crm.commerce.carts/1.0.0",
      },
    ],
  };

  const handleNext = () => {
    setProjectIndex((prev) => (prev + 1) % experience.projects.length);
  };

  const handlePrev = () => {
    setProjectIndex(
      (prev) =>
        (prev - 1 + experience.projects.length) % experience.projects.length
    );
  };

  const currentProject = experience.projects[projectIndex];

  return (
    <SectionWrapper title="Work Experience">
      <Box
        ref={sectionRef}
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          transition: "all 1s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <Card
          sx={{
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(30, 30, 30, 0.05)"
                : "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
            overflow: "hidden",
            border:
              theme.palette.mode === "dark"
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : "1px solid rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0 20px 40px rgba(245, 0, 87, 0.3)",
              border: "1px solid rgba(245, 0, 87, 0.4)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              p: 2.5,
            }}
          >
            {/* Left Section - Company Details & Role */}
            <Box
              sx={{
                flex: 1.5,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {/* Position, Company & Logo Section - Horizontal Layout */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 0,
                }}
              >
                {/* Right: WSO2 Logo & Integration Team */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <Box
                    component="img"
                    src="/portfolio/images/wso2.png"
                    alt="WSO2 Logo"
                    sx={{
                      width: "160px",
                      height: "auto",
                        objectFit: "cover",
                    borderRadius: "8px",

                      
                    }}
                  />
                </Box>
                {/* Left: Position & Company Info */}
                <Box sx={{ flex: 1, alignItems: "start" }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      mb: 0.5,
                      color: "#f50057",
                    }}
                  >
                    {experience.position}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="h1"
                    sx={{
                      fontWeight: 600,
                      mb: 0.5,
                    }}
                  >
                    {experience.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontStyle: "italic",
                      fontSize: "0.85rem",
                    }}
                  >
                    {experience.duration}
                  </Typography>
                </Box>
              </Box>

              {/* Role Description */}
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: "12px",
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.03)"
                      : "rgba(0, 0, 0, 0.02)",
                  border:
                    theme.palette.mode === "dark"
                      ? "1px solid rgba(255, 255, 255, 0.08)"
                      : "1px solid rgba(0, 0, 0, 0.08)",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    lineHeight: 1.5,
                    color: "text.secondary",
                    fontSize: "0.85rem",
                  }}
                >
                  {experience.role}
                </Typography>
              </Box>

              {/* Snapshots Gallery */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 0.75,
                }}
              >
                {experience.snapshots.map((snap, idx) => (
                  <Box
                    key={idx}
                    component="img"
                    src={snap}
                    alt={`WSO2 snapshot ${idx + 1}`}
                    sx={{
                      width: "100%",
                      height: "160px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      border:
                        theme.palette.mode === "dark"
                          ? "1px solid rgba(255, 255, 255, 0.08)"
                          : "1px solid rgba(0, 0, 0, 0.08)",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 4px 12px rgba(245, 0, 87, 0.3)",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Right Section - Projects */}
            <Box sx={{ flex: 2 }}>
              <CardContent sx={{ p: 0 }}>
                {/* Project Slider */}
                <Box sx={{ position: "relative" }}>
                  {/* Navigation Buttons */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <IconButton
                      onClick={handlePrev}
                      sx={{
                        backgroundColor: "rgba(245, 0, 87, 0.1)",
                        border: "1px solid rgba(245, 0, 87, 0.3)",
                        "&:hover": {
                          backgroundColor: "rgba(245, 0, 87, 0.2)",
                        },
                      }}
                    >
                      <ChevronLeft sx={{ color: "#f50057" }} />
                    </IconButton>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontWeight: 600,
                      }}
                    >
                      {projectIndex + 1} / {experience.projects.length}
                    </Typography>

                    <IconButton
                      onClick={handleNext}
                      sx={{
                        backgroundColor: "rgba(245, 0, 87, 0.1)",
                        border: "1px solid rgba(245, 0, 87, 0.3)",
                        "&:hover": {
                          backgroundColor: "rgba(245, 0, 87, 0.2)",
                        },
                      }}
                    >
                      <ChevronRight sx={{ color: "#f50057" }} />
                    </IconButton>
                  </Box>

                  {/* Project Card */}
                  <Box
                    sx={{
                      borderRadius: "12px",
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? "rgba(255, 255, 255, 0.03)"
                          : "rgba(0, 0, 0, 0.02)",
                      border:
                        theme.palette.mode === "dark"
                          ? "1px solid rgba(255, 255, 255, 0.08)"
                          : "1px solid rgba(0, 0, 0, 0.08)",
                      overflow: "hidden",
                      transition: "all 0.5s ease",
                      animation: "slideIn 0.5s ease",
                      "@keyframes slideIn": {
                        from: {
                          opacity: 0,
                          transform: "translateX(30px)",
                        },
                        to: {
                          opacity: 1,
                          transform: "translateX(0)",
                        },
                      },
                      "&:hover": {
                        backgroundColor:
                          theme.palette.mode === "dark"
                            ? "rgba(255, 255, 255, 0.05)"
                            : "rgba(0, 0, 0, 0.04)",
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 16px rgba(245, 0, 87, 0.2)",
                      },
                    }}
                    key={projectIndex}
                  >
                    {/* Project Image */}
                    <Box
                      component="img"
                      src={currentProject.image}
                      alt={currentProject.title}
                      sx={{
                        width: "100%",
                        height: "140px",
                        objectFit: "cover",
                      }}
                    />

                    {/* Project Content */}
                    <Box sx={{ p: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          mb: 1.5,
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          component="h5"
                          sx={{ fontWeight: 600, flex: 1 }}
                        >
                          {currentProject.title}
                        </Typography>
                        <Chip
                          label={currentProject.type}
                          size="small"
                          sx={{
                            backgroundColor: "transparent",
                            color: "#f50057",
                            fontWeight: 600,
                            border: "1px solid rgba(245, 0, 87, 0.3)",
                            fontSize: "0.7rem",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 1.5,
                          lineHeight: 1.5,
                          color: "text.secondary",
                          fontSize: "0.85rem",
                        }}
                      >
                        {currentProject.description}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {currentProject.techStack.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor:
                                theme.palette.mode === "dark"
                                  ? "rgba(255, 255, 255, 0.1)"
                                  : "rgba(0, 0, 0, 0.08)",
                              color:
                                theme.palette.mode === "dark"
                                  ? "rgba(255, 255, 255, 0.9)"
                                  : "rgba(0, 0, 0, 0.8)",
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Box>

                      {/* Action Buttons */}
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          mt: 2,
                          flexWrap: "wrap",
                        }}
                      >
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<GitHubIcon />}
                          href={currentProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            flex: 1,
                            minWidth: "140px",
                            border: "1px solid #f50057",
                            color: "#f50057",
                            fontSize: "0.75rem",
                            textTransform: "none",
                            "&:hover": {
                              borderColor: "#f50057",
                              backgroundColor: "rgba(245, 0, 87, 0.08)",
                            },
                          }}
                        >
                          View on GitHub
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          href={currentProject.ballerinaCentralLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            flex: 1,
                            minWidth: "140px",
                            border: "1px solid #f50057",
                            color: "#f50057",
                            fontSize: "0.75rem",
                            textTransform: "none",
                            "&:hover": {
                              borderColor: "#f50057",
                              backgroundColor: "rgba(245, 0, 87, 0.08)",
                            },
                          }}
                        >
                          View on Ballerina Central
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Box>
        </Card>
      </Box>
    </SectionWrapper>
  );
};

export default ExperienceSection;
