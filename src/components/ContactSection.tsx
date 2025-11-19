import { Box, Typography } from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import SectionWrapper from "./SectionWrapper";

function ContactSection() {
  return (
    <SectionWrapper title="Contact">
      <Box
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
            href="https://linkedin.com/in/induwaragayashan"
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
        </Box>
      </Box>
    </SectionWrapper>
  );
}

export default ContactSection;
