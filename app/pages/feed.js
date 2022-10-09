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
      .then((data) => {
        if(data)
          setData(data)
          console.log("> data:", data)
      })
  }, [track]);
  const [id, setId] = useState(0)
  
  useEffect(() => {
    if(track >= 0)
      getData(track)
  }, [getData])

  return (
    <>
    <main className={styles.main}>
      <div>
       {data ? (<Track data={data} />) : (<div>No hay data</div>)}
      </div>
    </main>
    </>
  );
}
