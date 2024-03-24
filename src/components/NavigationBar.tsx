import { AppBar, Box, Button, CssBaseline, Toolbar, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";


export default function NavigationBar() {

  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              
                <Button onClick={() => navigate("/MainPage")} sx={{ color: '#fff' }}>
                  Home
                </Button>
                <Button onClick={() => navigate("/Events")} sx={{ color: '#fff' }} >
                  Events
                </Button>
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block' } }}
            >
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}