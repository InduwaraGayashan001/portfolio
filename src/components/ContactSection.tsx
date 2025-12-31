import { Box, Typography, SvgIcon, TextField, Button } from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  Send,
} from "@mui/icons-material";
import SectionWrapper from "./SectionWrapper";
import { useState } from "react";

const MediumIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </SvgIcon>
);

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
                alignItems: "center",
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
                backdropFilter: "blur(10px)",
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
                backdropFilter: "blur(10px)",
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
              flexDirection: "column",
              gap: 2,
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
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(245, 0, 87, 0.2)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(245, 0, 87, 0.15)",
                  transform: "translateY(-3px)",
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
                backdropFilter: "blur(10px)",
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
                backdropFilter: "blur(10px)",
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
          <Typography
            variant="h5"
            sx={{ mb: 3, fontWeight: "bold", color: "#f50057" }}
          >
            Send me a message
          </Typography>

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
    </SectionWrapper>
  );
}

export default ContactSection;
