import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import styles from '../styles/Home.module.css';

const Content = ({ data }) => {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_start=${posts.length}&_limit=10`
    );
    const newPosts = await res.json();
    setPosts((post) => [...post, ...newPosts]);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {posts.map((data) => (
          <div key={data.id}>
          <div className={styles.videocard}>
          <Player
						title="Waterfalls"
						playbackId={data.playbackId}
						autoPlay
						muted
						showTitle={false}
						aspectRatio="16to9"
						// poster={<PosterImage />}
						controls={{
							autohide: 3000,
						}}
						theme={{
							borderStyles: { containerBorderStyle: 'hidden' },
							radii: { containerBorderRadius: '10px' },
						}}
						media={{
							sm: '(max-width: 5vw)',
							md: '(max-width: 8vw)',
							lg: '(max-width: 10vw)',
						}}
						objectFit='contain'
					/>
          </div>
          </div>
        ))}
      </InfiniteScroll>
      <style jsx>
        {`
          .back {
            padding: 10px;
            background-color: dodgerblue;
            color: white;
            margin: 10px;
          }
        `}
      </style>
    </>
  );
};

export default Content;