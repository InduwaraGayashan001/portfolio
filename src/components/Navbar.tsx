import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";



export default function Navbar() {
    return (
        <AppBar position='fixed' sx= {{ height: '100px', justifyContent:'center'}}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h6" component="div" sx={{ background: 'linear-gradient(45deg, #FF4081 30%, #FF9100 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' ,fontFamily: '"Brush Script MT"', fontSize: '4rem', transform: 'rotate(-10deg)'}}>
                        Induwara
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex', gap: '20px' } }}>
                    <Button component={Link} to="/" variant="outlined">
                        Home
                    </Button>
                    <Button component={Link} to="/about" variant="outlined">
                        About
                    </Button>
                    <Button component={Link} to="/about" variant="outlined">
                        Skills
                    </Button>
                    <Button component={Link} to="/about" variant="outlined">
                        Archievments
                    </Button>
                    <Button component={Link} to="/about" variant="outlined">
                        Milestones
                    </Button>
                    <Button component={Link} to="/about" variant="outlined">
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}