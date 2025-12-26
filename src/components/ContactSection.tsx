import { Box, Typography, SvgIcon } from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import SectionWrapper from "./SectionWrapper";

const MediumIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </SvgIcon>
);

function ContactSection() {
  return (
    <SectionWrapper title="Contact Me">
      <Box
        id="contact"
        sx={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              padding: 2,
              borderRadius: "12px",
              backgroundColor: "rgba(245, 0, 87, 0.05)",
              border: "1px solid rgba(245, 0, 87, 0.2)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              animation: "floatIn 0.8s ease-out",
              "@keyframes floatIn": {
                "0%": { opacity: 0, transform: "translateY(30px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
              "&:hover": {
                backgroundColor: "rgba(245, 0, 87, 0.1)",
                transform: "translateY(-8px) scale(1.02)",
                boxShadow: "0 8px 24px rgba(245, 0, 87, 0.3)",
              },
            }}
          >
            <Email sx={{ fontSize: "28px", color: "#f50057" }} />
            <Box>
              <Typography variant="body1">morawakgodamkig.21@uom.lk</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              padding: 2,
              borderRadius: "12px",
              backgroundColor: "rgba(245, 0, 87, 0.05)",
              border: "1px solid rgba(245, 0, 87, 0.2)",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(245, 0, 87, 0.1)",
                transform: "translateY(-3px)",
                boxShadow: "0 4px 12px rgba(245, 0, 87, 0.2)",
              },
            }}
          >
            <Email sx={{ fontSize: "28px", color: "#f50057" }} />
            <Box>
              <Typography variant="body1">
                induwaragayashan@gmail.com
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              padding: 2,
              borderRadius: "12px",
              backgroundColor: "rgba(245, 0, 87, 0.05)",
              border: "1px solid rgba(245, 0, 87, 0.2)",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(245, 0, 87, 0.1)",
                transform: "translateY(-3px)",
                boxShadow: "0 4px 12px rgba(245, 0, 87, 0.2)",
              },
            }}
          >
            <Phone sx={{ fontSize: "28px", color: "#f50057" }} />
            <Box>
              <Typography variant="body1">+94 77 431 6527</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              padding: 2,
              borderRadius: "12px",
              backgroundColor: "rgba(245, 0, 87, 0.05)",
              border: "1px solid rgba(245, 0, 87, 0.2)",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(245, 0, 87, 0.1)",
                transform: "translateY(-3px)",
                boxShadow: "0 4px 12px rgba(245, 0, 87, 0.2)",
              },
            }}
          >
            <LocationOn sx={{ fontSize: "28px", color: "#f50057" }} />
            <Box>
              <Typography variant="body1">Ratnapura, Sri Lanka</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            mt: 2,
          }}
        >
          <Box
            component="a"
            href="https://www.linkedin.com/in/induwara-gayashan-78812a277/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              padding: "12px 24px",
              borderRadius: "12px",
              backgroundColor: "rgba(245, 0, 87, 0.05)",
              border: "1px solid rgba(245, 0, 87, 0.2)",
              textDecoration: "none",
              transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              animation: "slideUp 0.6s ease-out 0.3s backwards",
              "@keyframes slideUp": {
                "0%": { opacity: 0, transform: "translateY(40px) scale(0.8)" },
                "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
              },
              "&:hover": {
                backgroundColor: "rgba(245, 0, 87, 0.15)",
                transform: "translateY(-8px) scale(1.05) rotate(2deg)",
                boxShadow: "0 8px 24px rgba(245, 0, 87, 0.4)",
              },
            }}
          >
            <LinkedIn sx={{ fontSize: "28px", color: "#f50057" }} />
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              LinkedIn
            </Typography>
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
              padding: "12px 24px",
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
            <GitHub sx={{ fontSize: "28px", color: "#f50057" }} />
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              GitHub
            </Typography>
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
              padding: "12px 24px",
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
            <MediumIcon sx={{ fontSize: "28px", color: "#f50057" }} />
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Medium
            </Typography>
          </Box>
        </Box>
      </Box>
    </SectionWrapper>
  );
}

export default ContactSection;
