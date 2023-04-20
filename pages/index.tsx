import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import axios, { AxiosError } from 'axios';
import HistoryRightSideBar from 'components/HistoryRightSidebar';
import LeftSidebar from 'components/LeftSidebar';
import Navbar from 'components/Navbar';
import YouTubeDialog from 'components/PlayVideoDialog';
import VideoList from 'components/VideoList';
import type { NextPage } from 'next';
import React from 'react';
import { VideoInfoType } from 'types/VideoInfoType';
import timeoutSignalController from 'utils/abort_timeout';

const Home: NextPage = () => {
  const [videos, setVideos] = React.useState<VideoInfoType[]>([]);
  const [chosenVideoId, setChosenVideoId] = React.useState<string>('');
  const [openYTDialog, setOpenYTDialog] = React.useState(false);
  const [historyBarOpen, setHistoryBarOpen] = React.useState(false);
  const [vidHist, setVidHist] = React.useState<VideoInfoType[]>([]);
  const [menuBarOpen, setMenuBarOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errTxt, setErrTxt] = React.useState('');

  React.useEffect(() => {
    handleSearch('');
  }, []);

  React.useEffect(() => {
    const hist = localStorage.getItem('videoHistory');
    setVidHist(hist ? JSON.parse(hist) : []);
  }, []);

  const handleHistoryBarClose = () => {
    setHistoryBarOpen(false);
  };
  const handleHistoryBarOpen = () => {
    setHistoryBarOpen(true);
  };
  const handleUpdateVidHistory = (vid: VideoInfoType) => {
    const newHist = [vid, ...vidHist.filter(e => e.id !== vid.id)].slice(
      0,
      100,
    );
    setVidHist(newHist);
    localStorage.setItem('videoHistory', JSON.stringify(newHist));
  };
  const handleVideoSelected = (vid: VideoInfoType) => {
    handleUpdateVidHistory(vid);
    setChosenVideoId(vid.id);
    setOpenYTDialog(true);
  };
  const handleClearHist = () => {
    setVidHist([]);
    localStorage.setItem('videoHistory', JSON.stringify([]));
  };
  const handleSearch = (searchTerm: string) => {
    setIsLoading(true);
    setErrTxt('');
    const abortSignalController = timeoutSignalController(5000);

    axios
      .get(`/v1/core/videos`, {
        signal: abortSignalController.signal,
        timeout: 5000,
        timeoutErrorMessage: 'Timed out trying to fetch results',
        params: {
          search: searchTerm,
          years: [],
        },
      })
      .then(rsp => {
        const videoResults: VideoInfoType[] = rsp.data;
        setVideos(videoResults);
      })
      .catch(err => {
        setVideos([]);
        if (abortSignalController.signal.aborted) {
          setErrTxt(`Timed out trying to reach server`);
        } else if (err instanceof AxiosError) {
          if (err.response)
            setErrTxt(
              `${err.response.data.error} ${err.response.data.message}`,
            );
          else setErrTxt(`${err.code} ${err.message}`);
        } else if (err instanceof Error) {
          setErrTxt(err.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleMenuBarToggle = () => {
    setMenuBarOpen(!menuBarOpen);
  };
  const handleOpenRightHistBar = () => {
    setMenuBarOpen(false);
    setHistoryBarOpen(true);
  };

  return (
    <>
      <Stack spacing={1}>
        <Navbar
          handleHistoryBarOpen={handleHistoryBarOpen}
          handleSearch={handleSearch}
          handleMenuBarToggle={handleMenuBarToggle}
        />
        {isLoading && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        )}
        {!isLoading && (
          <VideoList videos={videos} onVideoSelected={handleVideoSelected} />
        )}
        {errTxt && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h3">{errTxt}</Typography>
          </Box>
        )}
      </Stack>
      <LeftSidebar
        open={menuBarOpen}
        handleOpenRightHistBar={handleOpenRightHistBar}
        onMenuBarOpen={() => {
          setMenuBarOpen(true);
        }}
        onMenuBarClose={() => {
          setMenuBarOpen(false);
        }}
      />
      <HistoryRightSideBar
        open={historyBarOpen}
        handleDrawerClose={handleHistoryBarClose}
        list={vidHist}
        onVideoSelected={handleVideoSelected}
        handleClearHist={handleClearHist}
      />
      <YouTubeDialog
        videoId={chosenVideoId}
        open={openYTDialog}
        onClose={() => setOpenYTDialog(false)}
      />
    </>
  );
};

export default Home;
