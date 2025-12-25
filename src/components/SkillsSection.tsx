import { Box, Typography, useTheme } from "@mui/material";
import SectionWrapper from "./SectionWrapper";
import { useEffect, useRef, useState } from "react";

function SkillsSection() {
  const theme = useTheme();
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          level: "Experienced",
        },
        {
          name: "Java",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          level: "Experienced",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          level: "Basic",
        },
        {
          name: "Ballerina",
          logo: "https://ballerina.io/images/ballerina-logo.svg",
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          level: "Intermediate",
        },
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          level: "Basic",
        },
        {
          name: "Spring Boot",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
          level: "Experienced",
        },
        {
          name: "PyTorch",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          level: "Experienced",
        },
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          level: "Intermediate",
        },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          level: "Basic",
        },
        {
          name: "Kubernetes",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
          level: "Basic",
        },
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          level: "Experienced",
        },
      ],
    },
    {
      title: "Hardware & Embedded",
      skills: [
        {
          name: "Arduino",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
          level: "Experienced",
        },
        {
          name: "SolidWorks",
          logo: "https://upload.wikimedia.org/wikipedia/en/d/d2/SolidWorks_Logo.svg",
          level: "Intermediate",
        },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <SectionWrapper title="Skills">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 4,
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {skillCategories.map((category, index) => {
          const isVisible = visibleCards.includes(index);
          return (
            <Box
              key={category.title}
              ref={(el) => {
                cardRefs.current[index] = el as HTMLDivElement | null;
              }}
              data-index={index}
              sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0) rotate(0deg)"
                  : "translateY(80px) rotate(-5deg)",
                transition: isVisible
                  ? `all 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.2}s`
                  : "all 0.3s ease",
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(30, 30, 30, 0.6)"
                    : "rgba(255, 255, 255, 0.6)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                padding: 3,
                border:
                  theme.palette.mode === "dark"
                    ? "1px solid rgba(255, 255, 255, 0.1)"
                    : "1px solid rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  transform: "translateY(-10px) scale(1.03)",
                  boxShadow: "0 20px 40px rgba(245, 0, 87, 0.3)",
                  border: "1px solid rgba(245, 0, 87, 0.4)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: "#f50057",
                  textAlign: "center",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontSize: { xs: "14px", md: "16px" },
                }}
              >
                {category.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {category.skills.map((skill) => (
                  <Box
                    key={skill.name}
                    sx={{
                      width: "70px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 0.5,
                      position: "relative",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      sx={{
                        width: "50px",
                        height: "50px",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          filter: "blur(3px)",
                        },
                        "&:hover + .level-text": {
                          opacity: 1,
                        },
                      }}
                    >
                      {skill.logo.startsWith("http") ? (
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            transition: "all 0.3s ease",
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform =
                              "scale(1.2) rotate(5deg)";
                            e.currentTarget.style.filter =
                              "drop-shadow(0 0 10px rgba(245, 0, 87, 0.5))";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform =
                              "scale(1) rotate(0deg)";
                            e.currentTarget.style.filter = "none";
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            fontSize: "32px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {skill.logo}
                        </Box>
                      )}
                    </Box>
                    <Typography
                      className="level-text"
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "#f50057",
                        backgroundColor:
                          theme.palette.mode === "dark"
                            ? "rgba(0, 0, 0, 0.9)"
                            : "rgba(255, 255, 255, 0.95)",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        whiteSpace: "nowrap",
                        pointerEvents: "none",
                        zIndex: 2,
                        border: "1px solid #f50057",
                      }}
                    >
                      {skill.level}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "10px",
                        textAlign: "center",
                        color: theme.palette.text.secondary,
                        fontWeight: 500,
                        marginTop: 0.5,
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          );
        })}
      </Box>
    </SectionWrapper>
  );
}

export default SkillsSection;
