import Grid from '@mui/material/Grid';
import VideoCard from 'components/VideoCard';
import React from 'react';
import { VideoInfoType } from 'types/VideoInfoType';

function VideoList(props: { videos: VideoInfoType[] }) {
  const { videos } = props;
  return (
    <Grid container spacing={2}>
      {videos.map((e, idx) => {
        return (
          <Grid key={idx.toString()} item xs={6} sm={4} md={3} lg={2}>
            <VideoCard key={`${idx.toString()}`} videoInfo={e} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default VideoList;

