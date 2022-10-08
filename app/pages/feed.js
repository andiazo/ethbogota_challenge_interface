import Content from "../components/Content";
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from "react";
import Track from "../components/Track";

export default function index(props) {

  const router = useRouter()
  const { track } = router.query
  const [data, setData] = useState()

  const getData = useCallback(async (track) => {
    const dataTrack = [{"track": track,  "playbackId": "87b5b3urybkhinp5"}, {"track": track,  "playbackId": "87b5b3urybkhinp5"}]
    fetch('/api/tracks?id='+track)
      .then((res) => res.json())
      .then((data) => {console.log("datas: ",data)})
    setData(dataTrack)
    console.log(data)
  }, [track]);
  
  useEffect(() => {
    if(track >= 0)
      getData(track)
  }, [getData])

  return (
    <>
    <main className={styles.main}>
        <h1 className={styles.title}>
          {props.title}
        </h1>
      <div>
        <Track data={data} /> 
      </div>
    </main>
    </>
  );
}
