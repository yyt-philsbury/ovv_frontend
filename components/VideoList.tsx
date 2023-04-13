import VideoCard from 'components/VideoCard';
import React from 'react';
import { VideoInfoType } from 'types/VideoInfoType';

function VideoList(props: { videos: VideoInfoType[] }) {
  const { videos } = props;
  return (
    <div>
      {videos.map((e, idx) => {
        return <VideoCard key={`${idx.toString()}`} videoInfo={e} />;
      })}
    </div>
  );
}

export default VideoList;

