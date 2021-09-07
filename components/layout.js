import styles from './layout.module.css'
import Header from './header/header'
import Footer from './footer/footer'


export default function Layout({ children }) {
	return (
		<div
			className={styles.container}>
			<div className={styles.background}>



				<Header logo="/logo.svg">
					<ul>
						<li>Pricing</li>
						<li>Product</li>
						<li>About Us</li>
						<li>Careers</li>
						<li>Community</li>
					</ul>
				</Header>
				<main className={styles.mainContainer}>{children}</main>
				<Footer logo="/logo-invert.svg">
				</Footer>
			</div>

		</div>
	)
}