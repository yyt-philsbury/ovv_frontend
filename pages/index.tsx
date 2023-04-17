import Stack from '@mui/material/Stack';
import HistoryRightSideBar from 'components/HistoryRightSidebar';
import Navbar from 'components/Navbar';
import YouTubeDialog from 'components/PlayVideoDialog';
import VideoList from 'components/VideoList';
import type { NextPage } from 'next';
import React from 'react';
import { VideoInfoType } from 'types/VideoInfoType';

const Home: NextPage = () => {
  const [videos, setVideos] = React.useState<VideoInfoType[]>([]);
  const [chosenVideoId, setChosenVideoId] = React.useState<string>('');
  const [openYTDialog, setOpenYTDialog] = React.useState(false);
  const [historyBarOpen, setHistoryBarOpen] = React.useState(false);
  const [vidHist, setVidHist] = React.useState<VideoInfoType[]>([]);

  React.useEffect(() => {
    setVideos([
      {
        author: 'bob',
        id: 'mFCC8PGCZC4',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'yLupcG_eFag',
        original_upload_date: '2020-01-01',
        title:
          "입덕직캠] 르세라핌 김채원 직캠 4K 'ANTIFRAGILE' (LE SSERAFIM KIM CHAEWON FanCam) | LE SSERAFIM COMEBACK SHOW",
        views: 1000,
      },
      {
        author: 'bob asf afasf afa sfaf asfasf',
        id: 'NjKKaVhCLaI',
        original_upload_date: '2020-01-01',
        title:
          '[Fancam] Cho A of AOA(에이오에이 초아) Heart Attack(심쿵해) @M COUNTDOWN_150625',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'mFCC8PGCZC4',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'mFCC8PGCZC4',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'mFCC8PGCZC4',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'mFCC8PGCZC4',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'mFCC8PGCZC4',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'mFCC8PGCZC4',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'mFCC8PGCZC4',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'mFCC8PGCZC4',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
    ]);
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

  return (
    <>
      <Stack spacing={1}>
        <Navbar handleHistoryBarOpen={handleHistoryBarOpen} />
        <VideoList videos={videos} onVideoSelected={handleVideoSelected} />
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
