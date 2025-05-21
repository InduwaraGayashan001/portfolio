import { Box, Typography } from "@mui/material"

function App() {
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
                    backgroundColor: 'background.default',
                }}
            >
                <Typography variant="h1" component="h1" gutterBottom
                    sx={{
                        animation: 'fadeSlideIn 1.2s ease',
                        '@keyframes fadeSlideIn': {
                            from: { opacity: 0, transform: 'translateY(40px)' },
                            to: { opacity: 1, transform: 'translateY(0)' },
                        },
                    }}>
                    Test Page
                </Typography>
                <Typography variant="body1" marginTop={2}>
                    This is a simple example of a React app using Material-UI.
                </Typography>
            </Box>
        </Box>
    )
}

export default App