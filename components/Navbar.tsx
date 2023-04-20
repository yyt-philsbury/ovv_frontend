import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import React from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  [theme.breakpoints.up('xs')]: {
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
    [theme.breakpoints.up('xs')]: {
      width: '30ch',
    },
    [theme.breakpoints.up('sm')]: {
      width: '35ch',
    },
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
    [theme.breakpoints.up('lg')]: {
      width: '55ch',
    },
    [theme.breakpoints.up('xl')]: {
      width: '70ch',
    },
  },
}));

function Navbar(props: {
  disableSearch?: boolean;
  handleMenuBarToggle: () => void;
  handleHistoryBarOpen: () => void;
  handleSearch: (arg: string) => void;
}) {
  const {
    handleHistoryBarOpen,
    handleSearch,
    handleMenuBarToggle,
    disableSearch = false,
  } = props;
  const [isInputFocused, setIsInputFocused] = React.useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && isInputFocused) {
      const searchValue = event.currentTarget.value.trim();
      handleSearch(searchValue || '');
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              display: {
                xs: 'block',
                sm: 'block',
                md: 'none',
              },
            }}
            onClick={handleMenuBarToggle}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'block',
              },
            }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: '#fff', fontSize: 18 }}>HOME</Button>
            </Link>
            <Link href="/add" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: '#fff', fontSize: 18 }}>ADD</Button>
            </Link>
          </Stack>
          {!disableSearch && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onKeyDown={handleKeyDown}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </Search>
          )}
          <Button
            sx={{
              color: '#fff',
              fontSize: 18,
              display: {
                xs: 'none',
                sm: 'none',
                md: 'block',
              },
            }}
            onClick={handleHistoryBarOpen}
          >
            WATCH HISTORY
          </Button>
        </Toolbar>
      </AppBar>
      {/* Empty toolbar to move content down because we want fixed position */}
      <Toolbar />
    </Box>
  );
}

export default Navbar;
