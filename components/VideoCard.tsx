import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React from 'react';
import { VideoInfoType } from 'types/VideoInfoType';

function VideoCard(props: {
  videoInfo: VideoInfoType;
  onVideoSelected?: (vidSelected: VideoInfoType) => void;
}) {
  const { videoInfo, onVideoSelected } = props;
  const { author, id, original_upload_date, title } = videoInfo;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height: '5em', // adjust this number to limit the height of the title container
          }}
        >
          {`${title}`}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {`${author}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${original_upload_date}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          style={{ textDecoration: 'none' }}
          href={`https://www.youtube.com/watch?v=${videoInfo.id}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button size="small">Go to Youtube</Button>
        </Link>
        <Button
          size="small"
          onClick={() => {
            if (onVideoSelected) onVideoSelected(videoInfo);
          }}
        >
          Watch Video
        </Button>
      </CardActions>
    </Card>
  );
}

export default VideoCard;

