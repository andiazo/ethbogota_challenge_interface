import React from 'react';
import { Fragment } from 'react';
import { Typography } from '@material-tailwind/react';

import { Player } from '@livepeer/react';

import styles from '../styles/Home.module.css';

export default function Track({ data }) {
	console.log('data:', data);
	// if (true) return <div></div>

	return (
		<>
			<Fragment>
				<Typography variant="h1" color="blue-gray">
					{data.title}
				</Typography>
			</Fragment>
			{data.data ? (
				data.data.map((datum) => (
					<div key={datum.id} className={styles.videocard}>
						<Player
							title="Waterfalls"
							playbackId={datum.playbackId}
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
							objectFit="cover"
							className={styles.videocard}
						/>
					</div>
				))
			) : (
				<div>Sin datos por el momento</div>
			)}
		</>
	);
}
