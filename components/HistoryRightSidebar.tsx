import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled, useTheme } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { VideoInfoType } from 'types/VideoInfoType';

const drawerWidth = 360;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function HistoryRightSideBar(props: {
  open: boolean;
  handleDrawerClose: () => void;
  list: VideoInfoType[];
}) {
  const { open, handleDrawerClose, list } = props;
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Clear History" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {list.map((vidInfo, index) => (
          <ListItem key={index} disablePadding>
            <ListItemAvatar>
              <Avatar
                variant="square"
                sx={{ height: '80px', width: '80px' }}
                src={`https://i.ytimg.com/vi/${vidInfo.id}/default.jpg`}
              />
            </ListItemAvatar>
            <ListItemButton>
              <ListItemText
                primary={vidInfo.title}
                secondary={`${vidInfo.original_upload_date} ${vidInfo.author}`}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default HistoryRightSideBar;

