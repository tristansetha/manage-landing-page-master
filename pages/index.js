import Image from 'next/image'
import styles from '../styles/home.module.css'
import Layout from '../components/layout'
import Slider from '../components/slider/slider'
import { testimonialData } from './testimonials'

export default function Home() {
  
  return (
    <Layout>
      <section className={styles.card}>
        <div className={styles.cardElements1}>

          <div className={styles.heroContainer}>
            <div className={styles.illustrationContainer}>
              <Image
                className={styles.illustration}
                src="/illustration-intro.svg"
                layout='fill'
              />
            </div>
          </div>
          <div className={styles.summaryContainer}>
            <div className={styles.summaryInfoContainer}>
              <div className={styles.summaryInfoTitle}>
                Bring everyone together to build better products.
              </div>

              <div className={styles.summaryInfo}>
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.</div>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.generalBtn1}>
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className={styles.cardElements2}>
        </div>
        <div className={styles.informationContainer}>
          <div className={styles.informationHeader}>
            <div className={styles.informationHeaderTitle}>
              What’s different<br /> about Manage?
            </div>
            <div className={styles.informationHeaderSummary}>
              Manage provides all the functionality your<br /> team needs, without
              the complexity. Our software is tailor-made for modern digital
              product teams.
            </div>

          </div>
          <div className={styles.informationKeyServicesContainer}>
            <div className={styles.informatonServiceContainer}>
              <div className={styles.informationServiceHeader}>
                <div className={styles.informationServiceNumber}>01</div><div className={styles.informationServiceTitle}>Track company-wide progress</div>
              </div>
              <div className={styles.informationServiceSummary}>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture again.</div>
            </div>
            <div className={styles.informatonServiceContainer}>
              <div className={styles.informationServiceHeader}>
                <div className={styles.informationServiceNumber}>02</div><div className={styles.informationServiceTitle}>Advanced built-in reports</div>
              </div>
              <div className={styles.informationServiceSummary}>
                Set internal delivery estimates and track progress toward company
                goals. Our customisable dashboard helps you build out the reports
                you need to keep key stakeholders informed.
              </div>

            </div>
            <div className={styles.informatonServiceContainer}>
              <div className={styles.informationServiceHeader}>
                <div className={styles.informationServiceNumber}>03</div><div className={styles.informationServiceTitle}>Everything you need in one place</div>
              </div>
              <div className={styles.informationServiceSummary}>
                Stop jumping from one service to another to communicate, store files,
                track tasks and share documents. Manage offers an all-in-one team
                productivity solution.
              </div>
            </div>
          </div>
        </div>
        <Slider testimonials={testimonialData} />
        {/* <div className={styles.testimonialContainer}>
          <div className={styles.testimonialTitle}>
            What they’ve said
          </div>
          <div className={styles.testimonialSlider}>
            {testimonialCards}

          </div>
          <div className={styles.testimonialNavigation}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
          <div className={styles.testimonialButtonContainer}>
            <button>Get Started</button>
          </div>
        </div> */}
      </section>
    </Layout>

  )
}
