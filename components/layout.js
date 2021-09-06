import styles from './layout.module.css'
import Header from './header/header'
import Footer from './footer/footer'
import Image from 'next/image'


export default function Layout({ children }) {
	return (
		<div
			className={styles.container}>


			<Header logo="/logo.svg">
				<ul>
					<li>Pricing</li>
					<li>Product</li>
					<li>About Us</li>
					<li>Careers</li>
					<li>Community</li>
				</ul>
			</Header>
			<main>{children}</main>
			<Footer>

			</Footer>
		</div>
	)
}