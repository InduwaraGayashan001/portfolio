import { Box, Typography, useTheme } from "@mui/material";
import SectionWrapper from "./SectionWrapper";

function SkillsSection() {
  const theme = useTheme();

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Java",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "MATLAB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
        },
        {
          name: "Ballerina",
          logo: "https://ballerina.io/images/ballerina-logo.svg",
        },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Spring Boot",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
          name: "TensorFlow",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Kubernetes",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        },
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
      ],
    },
    {
      title: "Hardware & Embedded",
      skills: [
        {
          name: "Arduino",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
        },
        {
          name: "SolidWorks",
          logo: "https://upload.wikimedia.org/wikipedia/en/d/d2/SolidWorks_Logo.svg",
        },
      ],
    },
  ];

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
        {skillCategories.map((category) => (
          <Box
            key={category.title}
            sx={{
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
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 24px rgba(245, 0, 87, 0.3)",
                border: "1px solid rgba(245, 0, 87, 0.4)",
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
                    width:
                      skill.name === "SolidWorks"
                        ? "100px"
                        : "50px",
                    height:
                      skill.name === "SolidWorks"
                        ? "100px"
                        : "50px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0.5,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.2)",
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
                      }}
                    />
                  ) : (
                    <>
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
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: "9px",
                          textAlign: "center",
                          color: theme.palette.text.secondary,
                          fontWeight: 500,
                        }}
                      >
                        {skill.name}
                      </Typography>
                    </>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </SectionWrapper>
  );
}

export default SkillsSection;
