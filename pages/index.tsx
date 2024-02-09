import type { NextPage } from "next"
import { useState } from "react";
import Image from "next/image"
import styles from '../styles/Home.module.css'
import Song from '../components/Song/Song'
import Audio from "../components/Audio/Audio";
import MyApp from "./app";

const SONGS: Song[] = [
  {
    id: 0,
    title: 'Autonomic',
    artist: 'Valante',
    file: 'song/ES_Autonomic - Valante.wav',
    image: '/covers/valante.jpg'
  },
  {
    id: 1,
    title: 'Dark Utopia',
    artist: '',
    file: 'song/ES_Dark Utopia.wav',
    image: '/covers/Dark Utopia.jpg'
  },
  {
    id: 2,
    title: "Devil's Disgrace",
    artist: 'Deskant',
    file: "song/ES_Devil's Disgrace - Deskant.wav",
    image: "/covers/Devil's Disgrace.jpg"
  },
  {
    id: 3,
    title: 'Diner Dreams',
    artist: '',
    file: 'song/ES_Diner Dreams.wav',
    image: '/covers/Diner Dreams.jpg'
  },
  {
    id: 4,
    title: 'Infinity and Beyond',
    artist: 'Jo Wandrini',
    file: 'song/ES_Infinity and Beyond - Jo Wandrini.wav',
    image: '/covers/Infinity and Beyond.jpg'
  },
]

export const getStaticProps = async() => {
  const allsongs: Song[] = SONGS;
  return{
    props: {
        songs: allsongs
    },
    revalidate: 3600
  }
}

const Home: NextPage<{songs: Song[]}> = ({songs}) => {

  const [trackPlaying, setTrackPlaying] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.songPlaying}>
          <Song song ={songs[trackPlaying]} isPlaying={isPlaying} />
      </div>
      <Audio isPlaying={isPlaying} setIsPlaying={setIsPlaying} songs={songs}
      trackPlaying={trackPlaying} setTrackPlaying={setTrackPlaying}/>
    </div>
  )
}

export default Home
