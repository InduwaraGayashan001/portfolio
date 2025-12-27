import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import { EmojiEvents, ChevronLeft, ChevronRight } from "@mui/icons-material";
import SectionWrapper from "./SectionWrapper";

export const AchievementsSection = () => {
  const [achievementIndex, setAchievementIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const theme = useTheme();

  const achievements = [
    {
      icon: <EmojiEvents sx={{ fontSize: 40, color: "#FFD700" }} />,
      title: "Data Crunch at CodeJam CSE 2025",
      description: "Finalists - Top 10 teams in ML Hackathon (May 2025)",
      image: "/portfolio/images/datacrunch.png",
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 40, color: "#FFD700" }} />,
      title: "Comfix TechCom Ideathon",
      description: "Finalists - Top 10 teams (Aug 2024)",
      image: "/portfolio/images/comfix.png",
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 40, color: "#ff9800" }} />,
      title: "SLIoT Challenge 2023",
      description:
        "Semifinalists - Top 20 teams with Mechapulse machine failure detection system (Feb 2024)",
      image: "/portfolio/images/sliot.png",
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setAchievementIndex((prev) => (prev + 1) % achievements.length);
      }, 4000); // Auto-slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [achievementIndex, isPaused, achievements.length]);

  const handleNext = () => {
    setAchievementIndex((prev) => (prev + 1) % achievements.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000); // Pause for 8 seconds after manual navigation
  };

  const handlePrev = () => {
    setAchievementIndex(
      (prev) => (prev - 1 + achievements.length) % achievements.length
    );
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000); // Pause for 8 seconds after manual navigation
  };

  const visibleAchievementsMobile = [achievements[achievementIndex]];

  const visibleAchievementsDesktop = [
    {
      ...achievements[
        (achievementIndex - 1 + achievements.length) % achievements.length
      ],
      position: "left",
    },
    { ...achievements[achievementIndex], position: "center" },
    {
      ...achievements[(achievementIndex + 1) % achievements.length],
      position: "right",
    },
  ];

  return (
    <SectionWrapper title="Achievements">
      <Box sx={{ maxWidth: "1600px", margin: "0 auto", position: "relative" }}>
        {/* Desktop view - 3 achievements with barrel effect */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            px: 2,
            py: 4,
            minHeight: "400px",
            overflow: "hidden",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {visibleAchievementsDesktop.map((achievement, idx) => {
            const isCenter = achievement.position === "center";
            const isLeft = achievement.position === "left";
            const isRight = achievement.position === "right";

            return (
              <Card
                key={`${achievement.title}-${idx}-${achievementIndex}`}
                sx={{
                  width: isCenter ? "450px" : "380px",
                  flexShrink: 0,
                  marginLeft: isLeft ? "-120px" : 0,
                  marginRight: isRight ? "-120px" : 0,
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(30, 30, 30, 0.3)"
                      : "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  p: 2,
                  transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  transform: isCenter
                    ? "scale(1.08) translateY(-12px)"
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
                        borderRadius: "8px",
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
                        borderRadius: "8px",
                      },
                  border: isCenter
                    ? "2px solid #f50057"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  animation:
                    "trainSlide 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  "@keyframes trainSlide": {
                    from: {
                      opacity: 0,
                      transform: isCenter
                        ? "scale(1.08) translateX(50px) translateY(-12px)"
                        : "scale(1) translateX(50px)",
                    },
                    to: {
                      opacity: 1,
                      transform: isCenter
                        ? "scale(1.08) translateY(-12px)"
                        : "scale(0.92) translateX(0)",
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  src={achievement.image}
                  alt={achievement.title}
                  sx={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    {achievement.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    {achievement.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        {/* Mobile view - 1 achievement */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            px: 2,
          }}
        >
          {visibleAchievementsMobile.map((achievement, idx) => (
            <Card
              key={`${achievement.title}-mobile-${idx}`}
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(30, 30, 30, 0.8)"
                    : "rgba(255, 255, 255, 0.9)",
                overflow: "hidden",
                transition: "all 0.5s ease-in-out",
                animation: "slideIn 0.5s ease-in-out",
                "@keyframes slideIn": {
                  from: { opacity: 0, transform: "translateX(30px)" },
                  to: { opacity: 1, transform: "translateX(0)" },
                },
                p: 2,
              }}
            >
              <Box
                component="img"
                src={achievement.image}
                alt={achievement.title}
                sx={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {achievement.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  {achievement.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Navigation arrows - desktop */}
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

        {/* Pagination dots */}
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
          <IconButton onClick={handlePrev} sx={{ display: { md: "none" } }}>
            <ChevronLeft />
          </IconButton>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            {achievements.map((_, index) => (
              <Box
                key={index}
                component="span"
                sx={{
                  display: "inline-block",
                  width: achievementIndex === index ? 12 : 8,
                  height: achievementIndex === index ? 12 : 8,
                  borderRadius: "50%",
                  backgroundColor:
                    achievementIndex === index
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
                onClick={() => setAchievementIndex(index)}
              />
            ))}
          </Box>
          <IconButton onClick={handleNext} sx={{ display: { md: "none" } }}>
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>
    </SectionWrapper>
  );
};
