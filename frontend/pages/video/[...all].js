// external modules
import { useRouter } from 'next/router';

const TheVideo = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Video: {id} </p>;
};

export default TheVideo;
