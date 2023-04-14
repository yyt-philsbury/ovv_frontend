import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '20ch',
      '&:focus': {
        width: '25ch',
      },
    },
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
      '&:focus': {
        width: '30ch',
      },
    },
    [theme.breakpoints.up('md')]: {
      width: '30ch',
      '&:focus': {
        width: '45ch',
      },
    },
    [theme.breakpoints.up('lg')]: {
      width: '45ch',
      '&:focus': {
        width: '60ch',
      },
    },
    [theme.breakpoints.up('xl')]: {
      width: '60ch',
      '&:focus': {
        width: '80ch',
      },
    },
  },
}));

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <MenuIcon />
            <HomeIcon
              sx={{
                display: {
                  sm: 'block',
                  md: 'none',
                },
              }}
            />
            <Typography
              variant="h5"
              sx={{
                display: {
                  sm: 'none',
                  md: 'block',
                },
              }}
            >
              Old Viral Videos
            </Typography>
          </Stack>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Stack direction="row" alignItems="center" spacing={1}>
            <AddIcon />
            <Typography
              variant="h6"
              sx={{
                display: {
                  sm: 'none',
                  md: 'block',
                },
              }}
            >
              Add Old Viral Video
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
      {/* Empty toolbar to move content down because we want fixed position */}
      <Toolbar />
    </Box>
  );
}

export default Navbar;

