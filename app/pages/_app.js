import '../styles/globals.css';
import Layout from '../components/layout';

import {
	LivepeerConfig,
	ThemeConfig,
	createReactClient,
	studioProvider,
} from '@livepeer/react';

import { ThemeProvider } from '@material-tailwind/react';

import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

const { provider, webSocketProvider, chains } = configureChains(defaultChains, [publicProvider()]);

const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains,
});

const clientStudio = createReactClient({
	provider: studioProvider({ apiKey: process.env.LIVEPEER_KEY }),
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


const client = createClient({
    provider,
    webSocketProvider,
    autoConnect: true,
    // added connectors from rainbowkit
    connectors,
});

// added RainbowKitProvider wrapper
function MyApp({ Component, pageProps }) {
    return (
        <WagmiConfig client={client}>
            <SessionProvider session={pageProps.session} refetchInterval={0}>
                <RainbowKitProvider chains={chains}>
				<ThemeProvider>
				<LivepeerConfig client={clientStudio} theme={theme}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</LivepeerConfig>
			</ThemeProvider>
                </RainbowKitProvider>
            </SessionProvider>
        </WagmiConfig>
    );
}

export default MyApp;
