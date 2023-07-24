import Banner from '@/components/banner/banner';
import SectionCards from '@/components/card/section-card';
import Navbar from '@/components/nav/navbar';
import { VideoResult, getVideos } from '@/lib/videos';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export interface VideoModel {
  imgUrl: string;
}

export interface ServerProps {
  disneyVideos: VideoResult[],
  productivityVideos: VideoResult[],
  travelVideos: VideoResult[],
}

export async function getServerSideProps() {
  const disneyVideos = await getVideos("disney videos"); 
  const productivityVideos = await getVideos("Productivity");
  const travelVideos = await getVideos("Travel");
  
  console.log('diserver' + disneyVideos.length);
  return { props: {disneyVideos, travelVideos, productivityVideos}}
}

// const videos : VideoModel[] = [
//   {
//     imgUrl: "/cafe.png"
//   },
//   {
//     imgUrl: "/cafe.png"
//   },
//   {
//     imgUrl: "/cafe.png"
//   },
//   {
//     imgUrl: "/cafe.png"
//   },
//   {
//     imgUrl: "/cafe.png"
// //   }
// ]

export default function Home( props: ServerProps  ) {
  console.log('di client' + props.disneyVideos.length)
  return ( 
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Navbar username='Qiko'/>
        <Banner title='Clifford the Red Dog' subtitle='A very cute dog' imgUrl='public/aku.jpeg' />
        <div className={styles.sectionWrapper}>
          <SectionCards title='Disney' videos={props.disneyVideos} size='large' />
          <SectionCards title='Travel' videos={props.travelVideos} size='small' />
          <SectionCards title='Productivity' videos={props.productivityVideos} size='medium' />
          <SectionCards title='Popular' videos={props.disneyVideos} size='small'/>
        </div>
      </main>
    </div>
  )
}
