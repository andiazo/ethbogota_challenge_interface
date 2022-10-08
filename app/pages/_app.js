import '../styles/globals.css';
import Layout from '../components/layout';

import {
	LivepeerConfig,
	ThemeConfig,
	createReactClient,
	studioProvider,
} from '@livepeer/react';

const client = createReactClient({
	provider: studioProvider({ apiKey: process.env.LIVEPEER_KEY, }),
});

const theme = {
  colors: {
    accent: 'rgb(0, 145, 255)',
    containerBorderColor: 'rgba(0, 145, 255, 0.9)',
  },
  fonts: {
    display: 'Inter',
  },
};

function MyApp({ Component, pageProps }) {
	return (
		<LivepeerConfig client={client} theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</LivepeerConfig>
	);
}

export default MyApp;
