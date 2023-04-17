import Stack from '@mui/material/Stack';
import Navbar from 'components/Navbar';
import YouTubeDialog from 'components/PlayVideoDialog';
import VideoList from 'components/VideoList';
import type { NextPage } from 'next';
import React from 'react';
import { VideoInfoType } from 'types/VideoInfoType';

const Home: NextPage = () => {
  const [data, setData] = React.useState<VideoInfoType[]>([]);
  const [urlChosen, setUrlChosen] = React.useState<string>('');
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setData([
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

  return (
    <Stack spacing={1}>
      <Navbar />
      <YouTubeDialog
        videoId={urlChosen}
        open={open}
        onClose={() => setOpen(false)}
      />
      <VideoList
        videos={data}
        onVideoSelected={(url: string) => {
          setUrlChosen(url);
          console.log(url);
          setOpen(true);
        }}
      />
    </Stack>
  );
};

export default Home;
