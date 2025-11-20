import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Typography, useTheme } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WorkIcon from "@mui/icons-material/Work";
import SectionWrapper from "./SectionWrapper";
import { useEffect, useRef, useState } from "react";

export const MilestonesSection = () => {
  const theme = useTheme();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const milestones = [
    {
      year: "2006",
      title: "Started School Journey",
      description:
        "Began primary education at R/Nivi/Kalalella M.V., then transferred to Kahawata Primary School",
      icon: SchoolIcon,
      image: "/portfolio/images/scl.png",
    },
    {
      year: "2010",
      title: "Grade 5 Scholarship",
      description:
        "Achieved 174 marks and joined Sivali Central College, Ratnapura",
      icon: EmojiEventsIcon,
      image: "/portfolio/images/scc.jpg",
    },
    {
      year: "2017",
      title: "GCE O/L",
      description: "Achieved 9As in Ordinary Level Examination",
      icon: MenuBookIcon,
      image: "/portfolio/images/ol.png",
    },
    {
      year: "2020",
      title: "GCE A/L",
      description: "3As in Physical Science Stream. DR: 09, IR: 266",
      icon: MilitaryTechIcon,
      image: "/portfolio/images/al.jpg",
    },
    {
      year: "2021",
      title: "University of Moratuwa",
      description: "Selected for B.Sc. Engineering (Hons.) program",
      icon: AccountBalanceIcon,
      image: "/portfolio/images/uom.jpg",
    },
    {
      year: "2023",
      title: "Department of ENTC",
      description: "Selected to Electronic and Telecommunication Engineering",
      icon: ElectricBoltIcon,
      image: "/portfolio/images/entc.jpg",
    },
    {
      year: "2024",
      title: "WSO2 Internship",
      description: "Software Engineer Intern at WSO2 Integration team",
      icon: WorkIcon,
      image: "/portfolio/images/wso2t.png",
    },
  ];

  const colors = ["#f50072ff", "#057ff9ff"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <SectionWrapper title="Milestones">
      <Timeline position="alternate">
        {milestones.map((milestone, index) => {
          const milestoneColor = colors[index % colors.length];
          const isVisible = visibleItems.includes(index);

          return (
            <TimelineItem
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el as HTMLDivElement | null;
              }}
              data-index={index}
              sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              <TimelineOppositeContent
                sx={{
                  mt: "auto",
                  m: "auto 0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: index % 2 === 0 ? "flex-end" : "flex-start",
                }}
                variant="body2"
                color="text.secondary"
              >
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "32px" },
                    fontWeight: "bold",
                    color: milestoneColor,
                    lineHeight: 1,
                  }}
                >
                  {milestone.year}
                </Typography>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineConnector
                  sx={{
                    background:
                      index === 0
                        ? "transparent"
                        : index % 2 === 0
                        ? "#f50072ff"
                        : "#057ff9ff",
                    height: "60px",
                    width: "8px",
                    mt: "3px",
                    mb: "3px",
                    borderRadius: "5px",
                  }}
                />
                <TimelineDot
                  sx={{
                    width: { xs: "60px", md: "80px" },
                    height: { xs: "60px", md: "80px" },
                    border: `4px solid ${milestoneColor}`,
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? "rgba(30, 30, 30, 0.9)"
                        : "rgba(255, 255, 255, 0.9)",
                    boxShadow: `0 0 30px ${milestoneColor}60`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  <milestone.icon
                    sx={{
                      fontSize: { xs: "32px", md: "40px" },
                      color: milestoneColor,
                    }}
                  />
                </TimelineDot>
                <TimelineConnector
                  sx={{
                    background:
                      index === milestones.length - 1
                        ? "transparent"
                        : index % 2 === 0
                        ? "#f50072ff"
                        : "#057ff9ff",
                    height: "60px",
                    width: "8px",
                    mb: "3px",
                    mt: "3px",
                    borderRadius: "5px",
                  }}
                />
              </TimelineSeparator>

              <TimelineContent
                sx={{
                  py: "12px",
                  px: 2,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: index % 2 === 0 ? "flex-start" : "flex-end",
                  "&:hover .milestone-title": {
                    opacity: 0,
                  },
                  "&:hover .milestone-details": {
                    opacity: 1,
                    visibility: "visible",
                  },
                }}
              >
                {/* Title shown by default on xs, hidden on md+ */}
                <Typography
                  variant="h6"
                  component="span"
                  className="milestone-title"
                  sx={{
                    display: { xs: "block", md: "none" },
                    fontSize: "12px",
                    fontWeight: "700",
                    color: milestoneColor,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    lineHeight: 1,
                    textAlign: index % 2 === 0 ? "left" : "right",
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {milestone.title}
                </Typography>

                {/* Image and description - shown on hover for xs, always visible on md+ */}
                <Box
                  className="milestone-details"
                  sx={{
                    position: { xs: "absolute", md: "relative" },
                    top: { xs: "50%", md: "auto" },
                    left: { xs: "50%", md: "auto" },
                    transform: {
                      xs: "translate(-50%, -50%)",
                      md: "translate(0, 0)",
                    },
                    opacity: { xs: 0, md: 1 },
                    visibility: { xs: "hidden", md: "visible" },
                    transition: "all 0.4s ease",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? "rgba(0, 0, 0, 0.95)"
                        : "rgba(255, 255, 255, 0.98)",
                    padding: { xs: 1, md: 2 },
                    borderRadius: { xs: "8px", md: "12px" },
                    border: `1px solid ${milestoneColor}`,
                    minWidth: { xs: "120px", md: "250px" },
                    maxWidth: { xs: "200px", md: "300px" },
                    "&:hover": {
                      "@media (min-width: 900px)": {
                        transform: "scale(1.05) translateY(-5px)",
                        boxShadow: `0 15px 35px ${milestoneColor}40, 0 5px 15px ${milestoneColor}30`,
                        border: `2px solid ${milestoneColor}`,
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: "60px", md: "120px" },
                      overflow: "hidden",
                      borderRadius: { xs: "6px", md: "8px" },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: `linear-gradient(135deg, 
                          transparent 0%, 
                          transparent 10%, 
                          ${milestoneColor}15 10%, 
                          transparent 15%, 
                          transparent 20%, 
                          ${milestoneColor}15 20%, 
                          transparent 25%, 
                          transparent 30%, 
                          ${milestoneColor}15 30%, 
                          transparent 35%)`,
                        pointerEvents: "none",
                        zIndex: 1,
                        mixBlendMode: "overlay",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: "-50%",
                        left: "-50%",
                        width: "200%",
                        height: "200%",
                        background: `repeating-linear-gradient(
                          45deg,
                          transparent,
                          transparent 2px,
                          ${milestoneColor}08 2px,
                          ${milestoneColor}08 4px
                        )`,
                        pointerEvents: "none",
                        zIndex: 1,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={milestone.image}
                      alt={milestone.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "contrast(1.05) saturate(1.1)",
                        position: "relative",
                        zIndex: 0,
                        transition: "all 0.4s ease",
                        ".milestone-details:hover &": {
                          "@media (min-width: 900px)": {
                            transform: "scale(1.08)",
                            filter:
                              "contrast(1.1) saturate(1.3) brightness(1.05)",
                          },
                        },
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: theme.palette.text.primary,
                      fontSize: { xs: "11px", md: "16px" },
                      fontWeight: "700",
                      textAlign: "center",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {milestone.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: { xs: "10px", md: "13px" },
                      lineHeight: 1.5,
                      textAlign: "center",
                    }}
                  >
                    {milestone.description}
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </SectionWrapper>
  );
};
