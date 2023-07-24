import { VideoResult } from '@/lib/videos';
import styles from '../card/SectionCard.module.css';
import Card from "./card";

interface SectionCardProps {
  title: string;
  videos: VideoResult[];
  size: string;
}

const SectionCards = (props: SectionCardProps) => {
  const { title, videos = [], size } = props;
  return <section className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.cardWrapper}>
        {videos.map((video, idx) => {
          return (
            <Card
                key={idx}
                id={idx}
                imgUrl={video.imgUrl}
                size={size}
            />
          )
        }
      )
    }
    </div>
  </section>
}

export default SectionCards;