import { Typography, Box, Card, useTheme, Chip } from "@mui/material";
import SectionWrapper from "./SectionWrapper";
import { useEffect, useRef, useState } from "react";

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const areasOfInterest = [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Deep Learning",
    "Software Development",
    "Data Science",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
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

  return (
    <SectionWrapper title="About Me">
      <Card
        ref={sectionRef}
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(30, 30, 30, 0.3)"
              : "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          border:
            theme.palette.mode === "dark"
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.1)",
          p: { xs: 3, md: 4 },
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateX(0) scale(1)"
            : "translateX(-50px) scale(0.95)",
          transition: "all 1s cubic-bezier(0.34, 1.56, 0.64, 1)",
          "&:hover": {
            border: "1px solid rgba(245, 0, 87, 0.4)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
          }}
        >
          {/* Photo Section */}
          <Box
            sx={{
              flex: { xs: "0 0 auto", md: "0 0 300px" },
              display: "flex",
              justifyContent: "center",
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "scale(1) rotate(0deg)"
                : "scale(0.8) rotate(-10deg)",
              transition: "all 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s",
            }}
          >
            <Box
              component="img"
              src="/portfolio/images/avatar1.png"
              alt="Induwara Gayashan"
              sx={{
                width: { xs: "200px", md: "250px" },
                height: { xs: "200px", md: "250px" },
                objectFit: "cover",
                borderRadius: "20px",
                border: "1px solid #f50057",
                transform: "scale(1.05) rotate(2deg)",
                boxShadow: "0 7px 15px rgba(245, 0, 87, 0.5)",
              }}
            />
          </Box>

          {/* Text Section */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "20px",
                lineHeight: 1.8,
                textAlign: "left",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s fade-in-out 0.4s",
              }}
            >
              Final-year Electronic & Telecommunication Engineering student at
              the University of Moratuwa, fueled by curiosity and a passion for
              lifelong learning. Enthusiastic about AI, machine learning,
              computer vision, and software engineering, always exploring new
              technologies and turning ideas into practical solutions.
              Thrives
              in collaborative environments, loves tackling challenging
              problems, and is driven to create work that makes a real impact.
            </Typography>
          </Box>
        </Box>

        {/* Areas of Interest Section */}
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop:
              theme.palette.mode === "dark"
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : "1px solid rgba(0, 0, 0, 0.1)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#ffff",
            }}
          >
            Areas of Interest:
          </Typography>
          {areasOfInterest.map((interest, index) => (
            <Chip
              key={index}
              label={interest}
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(245, 0, 87, 0.1)"
                    : "rgba(245, 0, 87, 0.08)",
                color: "#f50057",
                fontWeight: 600,
                border: "1px solid rgba(245, 0, 87, 0.3)",
                fontSize: "0.875rem",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(245, 0, 87, 0.2)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 8px rgba(245, 0, 87, 0.3)",
                },
              }}
            />
          ))}
        </Box>
      </Card>
    </SectionWrapper>
  );
}

export default AboutSection;
