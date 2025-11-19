import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
          component="h1"
          sx={{
            ...fadeIn,
            lineHeight: 1.1,
            fontSize: { xs: 40, md: 80 },
            fontWeight: "bold",
          }}
        >
          Induwara Gayashan
        </Typography>
        <Typography
          variant="h4"
          component="h4"
          gutterBottom
          sx={{
            ...fadeIn,
            mb: 3,
            mt: 3,
            fontSize: { xs: 20, md: 30 },
          }}
        >
          Electronic & Telecommunication Engineering Student
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
            Final Year Undergraduate at University of Moratuwa
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={() => navigate("/contact")}
          sx={{ mt: 1, fontSize: 15 }}
        >
          Contact Me
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;
