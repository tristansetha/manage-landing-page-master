import styles from './layout.module.css'
import Header from './header/header'
import Footer from './footer/footer'


export default function Layout({ children }) {

  const headerItems = [
    {
      name: 'Pricing',
      href: "/"
    },
    {
      name: 'About Us',

      href: "/"
    },
    {
      name: 'Careers',
      href: "/"
    },
    {
      name: 'Community',
      href: "/"
    }
  ]

  return (
    <div
      className={styles.container}>
      <div className={styles.background}>
        <Header headerItems={headerItems} logo="/logo.svg" />
        <main className={styles.mainContainer}>{children}</main>
      </div>
      <Footer logo="/logo-invert.svg">
      </Footer>

    </div>
  )
}