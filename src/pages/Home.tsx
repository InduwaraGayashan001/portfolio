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
                flexDirection: 'raw', // Stack children
                justifyContent: 'center', // Center the child horizontally
                alignItems: 'center',     // Center the child vertically
                backgroundColor: 'background.default', // Optional: theme-based background
            }}
        >   <Box sx={{ flex: 2, textAlign: 'center' }}>
                <img src="./images/avatar.png" alt="Logo" style={{ width: '400px', height: '400px', objectFit: 'cover', borderRadius: '50%' }} />
            </Box>
            <Box
                sx={{
                    padding: 6,
                    textAlign: 'center',
                    backgroundColor: 'background.default',
                    flex: 4
                }}
            >   <Typography variant="h5" component="h5"
                sx={{
                    animation: 'fadeSlideIn 1.2s ease',
                    '@keyframes fadeSlideIn': {
                        from: { opacity: 0, transform: 'translateY(40px)' },
                        to: { opacity: 1, transform: 'translateY(0)' },
                    },
                }}>
                    Hello, I'm
                </Typography>
                <Typography variant="h1" component="h1"
                    sx={{
                        animation: 'fadeSlideIn 1.2s ease',
                        '@keyframes fadeSlideIn': {
                            from: { opacity: 0, transform: 'translateY(40px)' },
                            to: { opacity: 1, transform: 'translateY(0)' },
                        },
                    }}>
                    Induwara Gayashan
                </Typography>
                <Typography variant="h4" component="h4" gutterBottom
                    sx={{
                        animation: 'fadeSlideIn 1.2s ease',
                        '@keyframes fadeSlideIn': {
                            from: { opacity: 0, transform: 'translateY(40px)' },
                            to: { opacity: 1, transform: 'translateY(0)' },
                        },
                        mb: 3,
                    }}>
                    Electronics & Telecommunication Engineering Student
                </Typography>
        
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1}}>
                    <img
                        src="./images/uom.png"
                        alt="Logo"
                        style={{
                            width: '30px',
                            height: '30px',
                        }}
                    />
                    <Typography variant="h6" component="span" sx={{ alignItems: 'left', color: 'gray' }}>
                        Undergraduate at University of Moratuwa
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 3 }}>
                    <img
                        src="./images/wso2.png"
                        alt="Logo"
                        style={{
                            width: '40px',
                            height: '40px',
                        }}
                    />
                    <Typography variant="h6" component="span" sx={{ alignItems: 'left', color: 'gray' }}>
                        Software Engineer Intern at WSO2
                    </Typography>
                </Box>
                <Button variant="contained" onClick={() => navigate('/test')} >
                    Download CV
                </Button>
                <Typography variant="body1" marginTop={2}>
                    This is a simple example of a React app using Material-UI.
                </Typography>
            </Box>

        </Box>
    )

}

export default App
