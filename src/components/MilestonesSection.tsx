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

export const MilestonesSection = () => {
  const theme = useTheme();
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

  return (
    <SectionWrapper title="Milestones">
      <Timeline position="alternate">
        {milestones.map((milestone, index) => {
          const milestoneColor = colors[index % colors.length];

          return (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{
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
                    fontSize: { xs: "24px", md: "32px" },
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
                    bgcolor: index === 0 ? "transparent" : milestoneColor,
                    height: "60px",
                    width: "3px",
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
                    bgcolor:
                      index === milestones.length - 1
                        ? "transparent"
                        : milestoneColor,
                    height: "60px",
                    width: "3px",
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
                    fontSize: "16px",
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
                    transition: "all 0.3s ease",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? "rgba(0, 0, 0, 0.95)"
                        : "rgba(255, 255, 255, 0.98)",
                    padding: { xs: 1.5, md: 2 },
                    borderRadius: { xs: "8px", md: "12px" },
                    border: `2px solid ${milestoneColor}`,
                    minWidth: { xs: "180px", md: "250px" },
                    maxWidth: { xs: "220px", md: "300px" },
                  }}
                >
                  <Box
                    component="img"
                    src={milestone.image}
                    alt={milestone.title}
                    sx={{
                      width: "100%",
                      height: { xs: "60px", md: "120px" },
                      objectFit: "cover",
                      borderRadius: { xs: "6px", md: "8px" },
                    }}
                  />
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
