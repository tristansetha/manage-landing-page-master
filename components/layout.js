import Head from 'next/head'
import Image from 'next/image'
// css modules are usefull for component level styles and generating unique lass names
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Header from './header/header'

const name = 'Tristan Setha'
export const siteTitle = 'Next.js Sample Website'

// this component is shared across all pages

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Header hello="helloworld" />
			<main>{children}</main>
		</div>
	)
}