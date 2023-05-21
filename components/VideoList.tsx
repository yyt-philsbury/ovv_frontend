import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import VideoCard from 'components/VideoCard';
import React from 'react';
import { VideoInfoType } from 'types/VideoInfoType';

function VideoList(props: {
  videos: VideoInfoType[];
  onVideoSelected: (vid: VideoInfoType) => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const { videos, onVideoSelected, onPrev, onNext } = props;
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
      <Grid item xs={12}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '5px',
          }}
        >
          <Button onClick={onPrev}>Prev</Button>
          <Button onClick={onNext}>Next</Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default VideoList;
