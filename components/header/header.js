import Head from 'next/head'
import styles from './header.module.css'
const header = ({ children }) => {
	console.log(children)
	return (
		<header className={styles.header}>
			header
		</header>
	);
}

export default header;
