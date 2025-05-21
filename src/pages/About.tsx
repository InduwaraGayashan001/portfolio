import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

function App() {

  const navigate = useNavigate();

  return (
      <Box
        sx={{
          height: '100vh',         // Full screen height
          width: '100vw',          // Full screen width
          display: 'flex',
          justifyContent: 'center', // Center the child horizontally
          alignItems: 'center',     // Center the child vertically
          backgroundColor: 'background.default', // Optional: theme-based background
        }}
      >
        <Box
          sx={{
            padding: 6,
            textAlign: 'center',
            borderRadius: 2,
          }}
        >
          <Typography variant="h1" component="h1" gutterBottom
            sx={{
                animation: 'fadeSlideIn 1.2s ease',
                '@keyframes fadeSlideIn': {
                from: { opacity: 0, transform: 'translateY(40px)' },
                to: { opacity: 1, transform: 'translateY(0)'},
                },
            }}>
            We are building a sample app using React, MUI, and TypeScript!
          </Typography>
          <Button variant="contained" onClick={()=>navigate('/test')} >
            Click Me
          </Button>
        </Box>
      </Box>
  )
}

export default App
