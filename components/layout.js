import styles from './layout.module.css'
import Header from './header/header'
import Footer from './footer/footer'


export default function Layout({ children }) {
  return (
    <div
      className={styles.container}>
      <div className={styles.background}>
        <Header logo="/logo.svg">
          <div>Pricing</div>
          <div>Product</div>
          <div>About Us</div>
          <div>Careers</div>
          <div>Community</div>
        </Header>
        <main className={styles.mainContainer}>{children}</main>
      </div>
      <Footer logo="/logo-invert.svg">
      </Footer>

    </div>
  )
}