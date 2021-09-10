import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import useToggle from '../../hooks/useToggle'

import styles from './header.module.css'

const Modal = ({ headerItems, active }) => {
  return (
    <div className={active ? `${styles.navModalContainer} ${styles.active}` : `${styles.navModalContainer}`}>
      {headerItems.map((element, index) => (
        <div className={styles.navModalMenu}>
          <a href={element.href}>
            {element.name}
          </a>
        </div>
      ))}
    </div>
  )
}


const Header = ({ headerItems, logo }) => {
  const [value, toggleValue] = useToggle(false)
  const handleOnClick = (value) => {
    toggleValue(value)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {
          <>
            <Image
              priority
              src={logo}
              className={styles.logo}
              height={18}
              width={110}
              alt="logo"
            />
          </>
        }
      </div>
      <div className={styles.navContainer}>
        {headerItems.map((element, index) => (
          <Link href={element.href}>
            <div>{element.name}</div>
          </Link>
        ))}
      </div>
      <Modal
        active={value}
        headerItems={headerItems}
      />
      <div className={styles.buttonContainer}>
        <button>Get Started</button>
      </div>
      <div className={styles.hamburgerContainer}>
        {value ? (
          <>
            <Image
              onClick={() => handleOnClick(false)}
              src={"/icon-close.svg"}
              className={styles.hamburger}
              height={21}
              width={22}
              alt="hamburger"
            />
          </>

        ) : (
          <>
            <Image
              onClick={() => handleOnClick(true)}
              src={"/icon-hamburger.svg"}
              className={styles.hamburger}
              height={18}
              width={25}
              alt="hamburger"
            />
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
