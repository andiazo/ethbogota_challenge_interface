import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Team() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Equipo | ABCrypto</title>
				<meta name="description" content="Aprende todo lo relacionado a blockchain fácil y rápido" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Equipo
				</h1>

				<div className={styles.grid}>
					<Link href="/team">
						<div className={styles.card}>
							<h2>Andres Diaz</h2>
							<p>Find in-depth information about Next.js features and API.</p>
						</div>
					</Link>

					<Link href="/team">
						<div className={styles.card}>
							<h2>Carlos Fonseca</h2>
							<p>Find in-depth information about Next.js features and API.</p>
						</div>
					</Link>

					<Link href="/team">
						<div className={styles.card}>
							<h2>Nicolás Lizarazo</h2>
							<p>Find in-depth information about Next.js features and API.</p>
						</div>
					</Link>

					<Link href="/team">
						<div className={styles.card}>
							<h2>Santiago Garzon</h2>
							<p>Find in-depth information about Next.js features and API.</p>
						</div>
					</Link>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by ETHGlobal @ ETHbogota
				</a>
			</footer>
		</div>
	);
}
