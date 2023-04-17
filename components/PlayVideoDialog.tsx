import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import React from 'react';
import YouTube from 'react-youtube';

function YouTubeDialog({ videoId, open, onClose }) {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
  }, []);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      PaperProps={{
        style: {
          width,
          height,
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
            width: width * 0.85,
            height: height * 0.8,
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

