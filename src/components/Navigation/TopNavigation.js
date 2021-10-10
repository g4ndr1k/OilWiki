import { useContext } from 'react';
import { Box, Link, AppBar, Toolbar, useTheme, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ColorModeContext from '../context/colormode-contex';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
//import AppBar from './AppBar';
//import Toolbar from './ToolBar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

const TopNavigation = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'flex-start' }}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{ fontSize: 24 }}
          >
            {'OilWiki'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              component={RouterLink}
              to="/dewasa"
              sx={rightLink}
            >
              {'Dewasa'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              component={RouterLink}
              to="/bayidanbalita"
              sx={rightLink}
            >
              {'Bayi & Balita'}
            </Link>
          </Box>
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default TopNavigation;
