import Grid from '@mui/material/Grid';
import VideoCard from 'components/VideoCard';
import React from 'react';
import { VideoInfoType } from 'types/VideoInfoType';

function VideoList(props: {
  videos: VideoInfoType[];
  onVideoSelected: (vid: VideoInfoType) => void;
}) {
  const { videos, onVideoSelected } = props;
  return (
    <Grid
      container
      spacing={2}
      sx={{
        paddingRight: '1vw',
      }}
    >
      {videos.map((e, idx) => {
        return (
          <Grid key={idx.toString()} item xs={6} sm={4} md={3} lg={2}>
            <VideoCard
              onVideoSelected={onVideoSelected}
              key={`${idx.toString()}`}
              videoInfo={e}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default VideoList;

