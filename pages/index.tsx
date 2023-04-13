import Navbar from 'components/Navbar';
import VideoList from 'components/VideoList';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <VideoList videos={[]} />
    </>
  );
};

export default Home;
