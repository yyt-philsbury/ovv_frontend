import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import React from 'react';
import YouTube from 'react-youtube';

function YouTubeDialog({ videoId, open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      PaperProps={{
        style: {
          width: window.innerWidth,
          height: window.innerHeight,
          maxWidth: 'unset',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <DialogContent>
        <YouTube
          videoId={videoId}
          opts={{
            width: window.innerWidth * 0.85,
            height: window.innerHeight * 0.83,
            playerVars: { autoplay: 1 },
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Close (ESC)
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default YouTubeDialog;

