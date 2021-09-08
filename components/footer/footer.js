import Image from 'next/image'

import styles from "./footer.module.css"
const footer = ({ logo }) => {
  return (
    <>
      <div className={styles.topFooterContainer}>
        <div className={styles.topFooterContentContainer}>
          <div className={styles.topFooterContentTitle}>Simplify how your team works<br /> today.</div>
          <div className={styles.topFooterButtonContainer}>
            <button>
              Get Started
            </button>
          </div>

        </div>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Updates in your inbox…" />
          <button>Go</button>
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.linkContainerRow}>
            <div>Home</div>
            <div>Pricing</div>
            <div>Products</div>
            <div>About Us</div>
          </div>
          <div className={styles.linkContainerRow}>
            <div>Careers</div>
            <div>Community</div>
            <div>Privacy Policy</div>
          </div>


        </div>
        <div className={styles.socialLinkContainer}>
          <div className={styles.socialIcon}>
            <Image
              src={"/icon-facebook.svg"}
              className={styles.socialIcon}
              height={30}
              width={30}
              alt="facebook"
            />
          </div>
          <div className={styles.socialIcon}>
            <Image
              src={"/icon-youtube.svg"}
              className={styles.socialIcon}
              height={30}
              width={30}
              alt="facebook"
            />
          </div>
          <div className={styles.socialIcon}>
            <Image
              src={"/icon-twitter.svg"}
              className={styles.socialIcon}
              height={24}
              width={30}
              alt="facebook"
            />
          </div>
          <div className={styles.socialIcon}>
            <Image
              src={"/icon-pinterest.svg"}
              className={styles.socialIcon}
              height={30}
              width={30}
              alt="facebook"
            />
          </div>
          <div className={styles.socialIcon}>
            <Image
              src={"/icon-instagram.svg"}
              className={styles.socialIcon}
              height={30}
              width={30}
              alt="facebook"
            />
          </div>
        </div>
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            className={styles.logo}
            height={22}
            width={154}
            alt="logo"
            layout="fixed"

          />
        </div>
        <div className={styles.copyright}>
          Copyright 2020. All Rights Reserved
        </div>
      </div>
    </>

  );
}

export default footer;
