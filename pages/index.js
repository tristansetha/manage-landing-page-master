import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
	return (
		<Layout>
			<section className={styles.card}>
				<div className={styles.heroContainer}>
					<div className={styles.illustrationContainer}>
						<Image
							className={styles.illustration}
							src="/illustration-intro.svg"
							layout='fixed'
							height={318}
							width={373}
						/>
					</div>

				</div>
				<div className={styles.summaryContainer}>
					<div className={styles.summaryInfoContainer}>
						<div className={styles.summaryInfoTitle}>
							Bring everyone together to build better products.
						</div>
						{/* <h1>
							Bring everyone together to build better products.
						</h1> */}
						<div className={styles.summaryInfo}>
							Manage makes it simple for software teams to plan day-to-day
							tasks while<br /> keeping the larger team goals in view.</div>
					</div>
					<div className={styles.buttonContainer}>
						<button className={styles.generalBtn1}>
							Get Started
						</button>
					</div>
				</div>
			</section>
		</Layout>

	)
}
