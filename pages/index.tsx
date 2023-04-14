import Stack from '@mui/material/Stack';
import Navbar from 'components/Navbar';
import VideoList from 'components/VideoList';
import type { NextPage } from 'next';
import React from 'react';
import { VideoInfoType } from 'types/VideoInfoType';

const Home: NextPage = () => {
  const [data, setData] = React.useState<VideoInfoType[]>([]);

  React.useEffect(() => {
    setData([
      {
        author: 'bob',
        id: 'EzzVp_RoFv8',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'EzzVp_RoFv8',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'EzzVp_RoFv8',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'EzzVp_RoFv8',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'EzzVp_RoFv8',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'EzzVp_RoFv8',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'EzzVp_RoFv8',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'EzzVp_RoFv8',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'EzzVp_RoFv8',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'EzzVp_RoFv8',
        original_upload_date: '2020-01-01',
        title:
          '[4K] 230408 MusicBank in Paris "Kitsch" IVE REI 아이브 레이 focus cam',
        views: 1000,
      },
      {
        author: 'bob',
        id: 'EzzVp_RoFv8',
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
      <VideoList videos={data} />
    </Stack>
  );
};

export default Home;
