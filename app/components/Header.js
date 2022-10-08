import styles from '../styles/Header.module.css';

export default function Header() {
	return (
		<div className={styles.topnav}>
			<a className={styles.active} href="#home">
				Inicio
			</a>
		</div>
	);
}


