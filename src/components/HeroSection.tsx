import { Box, Button, Typography, SvgIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GitHub, LinkedIn } from "@mui/icons-material";

const MediumIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </SvgIcon>
);

const fadeIn = {
  animation: "fadeSlideIn 1.2s ease",
  "@keyframes fadeSlideIn": {
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
};

function HeroSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        marginTop: "70px",
        px: { xs: 2, md: 4 },
      }}
    >
      <Box sx={{ flex: 2, textAlign: "center", mb: { xs: 2, md: 0 } }}>
        <Box
          component="img"
          src="/portfolio/images/avatar.png"
          alt="Induwara Gayashan"
          sx={{
            width: { xs: "180px", md: "300px" },
            height: { xs: "180px", md: "300px" },
            objectFit: "cover",
            borderRadius: "50%",
            border: "2px solid #f50057",
            mt: { xs: 3, md: 0 },
          }}
        />
      </Box>
      <Box
        sx={{
          padding: { xs: 2, md: 4 },
          textAlign: "center",
          flex: 4,
        }}
      >
        <Typography variant="h5" component="h5" sx={fadeIn}>
          Hello, I'm
        </Typography>
        <Typography
          variant="h1"
          sx={{
            ...fadeIn,
            lineHeight: 1.1,
            fontSize: { xs: 60, md: 80 },
            fontWeight: "bold",
          }}
        >
          Induwara{" "}
          <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
            Gayashan
          </Box>
        </Typography>
        <Typography
          variant="h4"
          component="h4"
          gutterBottom
          sx={{
            ...fadeIn,
            mb: { xs: 1, md: 3 },
            mt: { xs: 1, md: 3 },
            fontSize: { xs: 20, md: 30 },
          }}
        >
          {""}
          <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
            Electronic & Telecommunication Engineering Student
          </Box>
          <Box component="span" sx={{ display: { xs: "inline", md: "none" } }}>
            ENTC Student
          </Box>
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            mb: 2,
          }}
        >
          <img
            src="/portfolio/images/uom.png"
            alt="UoM Logo"
            style={{
              width: "30px",
              height: "30px",
            }}
          />
          <Typography
            variant="h6"
            component="span"
            sx={{ color: "gray", fontSize: { xs: 15, md: 20 } }}
          >
            Final Year Undergraduate at {""}
            <Box
              component="span"
              sx={{ display: { xs: "none", md: "inline" } }}
            >
              University of Moratuwa
            </Box>
            <Box
              component="span"
              sx={{ display: { xs: "inline", md: "none" } }}
            >
              UoM
            </Box>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mb: 2,
          }}
        >
          <Box
            component="a"
            href="https://linkedin.com/in/induwaragayashan"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              padding: "8px 8px",
              borderRadius: "12px",
              backgroundColor: "rgba(245, 0, 87, 0.05)",
              border: "1px solid rgba(245, 0, 87, 0.2)",
              textDecoration: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(245, 0, 87, 0.1)",
                transform: "translateY(-3px)",
                boxShadow: "0 4px 12px rgba(245, 0, 87, 0.2)",
              },
            }}
          >
            <LinkedIn sx={{ fontSize: "24px", color: "#f50057" }} />
          </Box>

          <Box
            component="a"
            href="https://github.com/InduwaraGayashan001"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              padding: "8px 8px",
              borderRadius: "12px",
              backgroundColor: "rgba(245, 0, 87, 0.05)",
              border: "1px solid rgba(245, 0, 87, 0.2)",
              textDecoration: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(245, 0, 87, 0.1)",
                transform: "translateY(-3px)",
                boxShadow: "0 4px 12px rgba(245, 0, 87, 0.2)",
              },
            }}
          >
            <GitHub sx={{ fontSize: "24px", color: "#f50057" }} />
          </Box>

          <Box
            component="a"
            href="https://medium.com/@induwaragayashan"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              padding: "8px 8px",
              borderRadius: "12px",
              backgroundColor: "rgba(245, 0, 87, 0.05)",
              border: "1px solid rgba(245, 0, 87, 0.2)",
              textDecoration: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(245, 0, 87, 0.1)",
                transform: "translateY(-3px)",
                boxShadow: "0 4px 12px rgba(245, 0, 87, 0.2)",
              },
            }}
          >
            <MediumIcon sx={{ fontSize: "24px", color: "#f50057" }} />
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 1 }}>
          <Button
            variant="contained"
            onClick={() => navigate("/contact")}
            sx={{ fontSize: 15 }}
          >
            Contact Me
          </Button>
          <Button
            variant="outlined"
            component="a"
            href="/portfolio/resume/induwara-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontSize: 15, border: "1px solid #f50057" }}
          >
            View Resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
