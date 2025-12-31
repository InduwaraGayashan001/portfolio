import { Box, Typography, TextField, Button } from "@mui/material";
import { Email, Phone, LocationOn, Send } from "@mui/icons-material";
import SectionWrapper from "./SectionWrapper";
import { useState } from "react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:induwaragayashan@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };
  return (
    <SectionWrapper title="Contact Me">
      <Box
        id="contact"
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        {/* Contact Info Section */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
                padding: 2,
                borderRadius: "12px",
                backgroundColor: "rgba(245, 0, 87, 0.05)",
                border: "1px solid rgba(245, 0, 87, 0.2)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(245, 0, 87, 0.1)",
                  transform: "translateY(-3px)",
                  boxShadow: "0 4px 12px rgba(245, 0, 87, 0.2)",
                },
              }}
            >
              <Email sx={{ fontSize: "28px", color: "#f50057", mt: 0.5 }} />
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                  Email
                </Typography>
                <Typography variant="body1">
                  induwaragayashan@gmail.com
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
                padding: 2,
                borderRadius: "12px",
                backgroundColor: "rgba(245, 0, 87, 0.05)",
                border: "1px solid rgba(245, 0, 87, 0.2)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(245, 0, 87, 0.1)",
                  transform: "translateY(-3px)",
                  boxShadow: "0 4px 12px rgba(245, 0, 87, 0.2)",
                },
              }}
            >
              <Phone sx={{ fontSize: "28px", color: "#f50057", mt: 0.5 }} />
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                  Phone
                </Typography>
                <Typography variant="body1">+94 77 431 6527</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
                padding: 2,
                borderRadius: "12px",
                backgroundColor: "rgba(245, 0, 87, 0.05)",
                border: "1px solid rgba(245, 0, 87, 0.2)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(245, 0, 87, 0.1)",
                  transform: "translateY(-3px)",
                  boxShadow: "0 4px 12px rgba(245, 0, 87, 0.2)",
                },
              }}
            >
              <LocationOn
                sx={{ fontSize: "28px", color: "#f50057", mt: 0.5 }}
              />
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                  Location
                </Typography>
                <Typography variant="body1">Ratnapura, Sri Lanka</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Send Message Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            flex: 1,
            padding: 3,
            borderRadius: "12px",
            backgroundColor: "rgba(245, 0, 87, 0.05)",
            border: "1px solid rgba(245, 0, 87, 0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              required
              fullWidth
              name="name"
              label="Your Name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "#f50057" },
                  "&.Mui-focused fieldset": { borderColor: "#f50057" },
                },
                "& .MuiInputLabel-root.Mui-focused": { color: "#f50057" },
              }}
            />

            <TextField
              required
              fullWidth
              name="email"
              label="Your Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "#f50057" },
                  "&.Mui-focused fieldset": { borderColor: "#f50057" },
                },
                "& .MuiInputLabel-root.Mui-focused": { color: "#f50057" },
              }}
            />

            <TextField
              required
              fullWidth
              name="subject"
              label="Subject"
              value={formData.subject}
              onChange={handleChange}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "#f50057" },
                  "&.Mui-focused fieldset": { borderColor: "#f50057" },
                },
                "& .MuiInputLabel-root.Mui-focused": { color: "#f50057" },
              }}
            />

            <TextField
              required
              fullWidth
              name="message"
              label="Message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "#f50057" },
                  "&.Mui-focused fieldset": { borderColor: "#f50057" },
                },
                "& .MuiInputLabel-root.Mui-focused": { color: "#f50057" },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<Send />}
              sx={{
                mt: 2,
                backgroundColor: "#f50057",
                "&:hover": {
                  backgroundColor: "#c51162",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(245, 0, 87, 0.4)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Copyright */}
      <Box
        sx={{
          textAlign: "center",
          mt: 6,
          pt: 3,
          borderTop: "1px solid rgba(245, 0, 87, 0.2)",
        }}
      >
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          © 2025 Induwara Gayashan. All rights reserved.
        </Typography>
      </Box>
    </SectionWrapper>
  );
}

export default ContactSection;
