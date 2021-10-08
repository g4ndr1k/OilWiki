import { Box, Link, AppBar, Toolbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
//import AppBar from './AppBar';
//import Toolbar from './ToolBar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

const TopNavigation = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'flex-start' }}>
          <Link variant="h6" underline="none" color="inherit" component={RouterLink} to="/" sx={{ fontSize: 24}} >
            {'OilWiki'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link color="inherit" variant="h6" underline="none" component={RouterLink} to="/dewasa" sx={rightLink} >
              {'Dewasa'}
            </Link>
            <Link color="inherit" variant="h6" underline="none" component={RouterLink} to="/bayidanbalita" sx={rightLink} >
              {'Bayi & Balita'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default TopNavigation
