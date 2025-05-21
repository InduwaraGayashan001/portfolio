import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2', // blue
    },
    secondary: {
      main: '#f50057', // pink
    },
    background: {
      default: "transparent", // dark background
      paper: '#1e1e1e', // dark paper
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontWeight: 400,
      background: 'linear-gradient(45deg, #ff4081 30%, #00e5ff 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#f50057', backgroundColor: 'transparent', borderRadius: 'none', '&:hover': { scale: 1.05, backgroundColor: "#f50057" },
        },
        contained: {
          backgroundColor: '#f50057',
          opacity: 0.9,
          color: 'white',
          border: 'none',
          '&:hover': {
            backgroundColor: '#f50057',
            opacity: 1,
            color: '#fff',
          },
        },
        outlined: {
          border: "none",
          color: '#f50057',
          '&:hover': {
            border: '1px solid #f50057',
            backgroundColor: 'transparent',
            color: '#f50057',
          },
        },
      },
    },
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Box
          sx={{
            minHeight: '100vh',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url("/images/image.png")`, // Place your image in the public folder
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat-y'
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  )
}
