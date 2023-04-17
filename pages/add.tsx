import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios, { AxiosError } from 'axios';
import HistoryRightSideBar from 'components/HistoryRightSidebar';
import Navbar from 'components/Navbar';
import YouTubeDialog from 'components/PlayVideoDialog';
import VideoCard from 'components/VideoCard';
import type { NextPage } from 'next';
import React from 'react';
import { AddNewVideoResultType } from 'types/AddNewVideoResultType';
import { VideoInfoType } from 'types/VideoInfoType';
import Url from 'url-parse';
import timeoutSignalController from 'utils/abort_timeout';

const getVideoId = (url: string): string => {
  const parsedUrl = new Url(url, true);
  switch (parsedUrl.host) {
    case 'www.youtube.com':
      if (
        parsedUrl.pathname !== '/watch' ||
        !parsedUrl.query ||
        !parsedUrl.query.v
      )
        throw new Error('Format should be www.youtube.com/watch?v=XXXX');
      return parsedUrl.query.v;
    case 'youtu.be':
      if (
        parsedUrl.pathname &&
        parsedUrl.pathname.split('/')?.length === 2 &&
        parsedUrl.pathname.split('/')[1]
      ) {
        return parsedUrl.pathname.split('/')[1];
      } else throw new Error('Format should be youtu.be/XXXX');
    default:
      throw new Error('Link is not www.youtube.com or youtu.be');
  }
};

const Home: NextPage = () => {
  const [url, setUrl] = React.useState('');
  const [errTxt, setErrTxt] = React.useState('');
  const [addVideoResult, setAddVideoResult] =
    React.useState<AddNewVideoResultType | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [historyBarOpen, setHistoryBarOpen] = React.useState(false);
  const [vidHist, setVidHist] = React.useState<VideoInfoType[]>([]);
  const [chosenVideoId, setChosenVideoId] = React.useState<string>('');
  const [openYTDialog, setOpenYTDialog] = React.useState(false);

  React.useEffect(() => {
    const hist = localStorage.getItem('videoHistory');
    setVidHist(hist ? JSON.parse(hist) : []);
  }, []);

  const handleSubmission = async () => {
    let abortSignalController;
    try {
      const id = getVideoId(url);
      abortSignalController = timeoutSignalController(5000);
      const result = await axios.post(
        `/v1/core/addvideo?id=${id}`,
        {
          id,
        },
        {
          signal: abortSignalController.signal,
          timeout: 10000,
          timeoutErrorMessage: 'Timed out trying to add video',
        },
      );
      const payload = result.data as AddNewVideoResultType;
      setAddVideoResult(payload);
    } catch (err) {
      setAddVideoResult(null);
      if (abortSignalController?.signal?.aborted) {
        setErrTxt(`Timed out connecting to YouTube`);
      } else if (err instanceof AxiosError) {
        if (err?.response?.data?.message) {
          setErrTxt(`${err?.response?.data?.message}`);
        } else {
          setErrTxt(`${err.code}: ${err.message}`);
        }
      } else if (err instanceof Error) setErrTxt(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleHistoryBarClose = () => {
    setHistoryBarOpen(false);
  };
  const handleHistoryBarOpen = () => {
    setHistoryBarOpen(true);
  };
  const handleUpdateVidHistory = (vid: VideoInfoType) => {
    const newHist = [vid, ...vidHist];
    setVidHist(newHist);
    localStorage.setItem('videoHistory', JSON.stringify(newHist));
  };
  const handleVideoSelected = (vid: VideoInfoType) => {
    handleUpdateVidHistory(vid);
    setChosenVideoId(vid.id);
    setOpenYTDialog(true);
  };

  return (
    <>
      <Stack spacing={1}>
        <Navbar handleHistoryBarOpen={handleHistoryBarOpen} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Typography variant="h2">Submission Rules:</Typography>
          <Typography variant="h4">{'1) Must be a youtube link'}</Typography>
          <Typography variant="h6">
            {
              'Example: https://www.youtube.com/watch?v=XXXX or https://youtu.be/XXXX'
            }
          </Typography>
          <Typography variant="h4">
            {'2) Must have over 1 million views'}
          </Typography>
          <Typography variant="h4">
            {'3) Must be uploaded on or before 2011-01-01'}
          </Typography>
          <TextField
            value={url}
            sx={{
              width: '50%',
            }}
            placeholder="https://www.youtube.com/watch?v=XXXX"
            onChange={evt => {
              setUrl(evt.target.value || '');
            }}
          />
          <Button
            disabled={isLoading}
            variant="contained"
            onClick={() => {
              setIsLoading(true);
              setErrTxt('');
              handleSubmission();
            }}
          >
            SUBMIT
          </Button>
          {errTxt && (
            <Typography color="red" variant="h5">
              {errTxt}
            </Typography>
          )}
          {addVideoResult && !addVideoResult.isNewVideo && (
            <Typography color="red" variant="h5">
              Video was already uploaded
            </Typography>
          )}
          {addVideoResult && (
            <VideoCard
              videoInfo={addVideoResult.video}
              onVideoSelected={handleVideoSelected}
            />
          )}
        </Box>
      </Stack>
      <HistoryRightSideBar
        open={historyBarOpen}
        handleDrawerClose={handleHistoryBarClose}
        list={vidHist}
        onVideoSelected={handleVideoSelected}
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

