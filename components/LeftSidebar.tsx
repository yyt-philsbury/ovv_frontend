import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Link from 'next/link';
import React from 'react';

const drawerWidth = 360;

function LeftSidebar(props: {
  open: boolean;
  handleOpenRightHistBar: () => void;
  onMenuBarOpen: () => void;
  onMenuBarClose: () => void;
}) {
  const { open, handleOpenRightHistBar, onMenuBarOpen, onMenuBarClose } = props;

  return (
    <SwipeableDrawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      anchor="left"
      open={open}
      onOpen={onMenuBarOpen}
      onClose={onMenuBarClose}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <ListItemText primary={'Home'} />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <Link href="/add" style={{ textDecoration: 'none' }}>
              <ListItemText primary={'Add New Video'} />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              onMenuBarClose();
              handleOpenRightHistBar();
            }}
          >
            <ListItemText primary={'Watch History'} />
          </ListItemButton>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}

export default LeftSidebar;

