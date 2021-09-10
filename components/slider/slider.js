import Image from 'next/image'
import styles from './slider.module.css'
import { useState, useEffect } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'

const Slide = ({ src, title, testimonial }) => {
  return (
    <>
      <div className={styles.testimonialCard}>
        <div className={styles.testimonialCardBackground}></div>
        <div className={styles.testimonialCardImageContainer}>
          <Image
            className={styles.testimonialCardImage}
            src={src}
            layout='fixed'
            height={72}
            width={72}
          />
        </div>
        <div className={styles.testimonialCardTitle}>{title}</div>
        <div className={styles.testimonialCardCopy}>{testimonial}</div>
      </div>
    </>
  )
}

export default function Slider({ testimonials }) {

  const isBreakpoint = useMediaQuery(1440)
  let tempTestimonials = testimonials


  const [slideIndex, setSlideIndex] = useState({
    pixels: 0,
    dot: 0,
    transition: 1
  })

  const [translateX, setTranslateX] = useState({
    pixels: 0,
    count: 0,
    transition: 1
  })
  // DESKTOP
  if (!isBreakpoint) {
    const handleTranslate = () => {
      if (translateX.count === tempTestimonials.length - 3) {
        setTranslateX({
          transition: 0,
          pixels: 0,
          count: 0
        })
      } else {
        setTranslateX({
          transition: 1,
          count: translateX.count + 1,
          pixels: translateX.pixels + 570
        })
      }
    }

    setTimeout(() => {
      console.log("trigger")
      handleTranslate()
    }, 6000)
    return (
      <>
        <div className={styles.testimonialContainer}>
          <div className={styles.testimonialTitle}>
            What they’ve said
          </div>
          <div
            style={{
              transform: `translateX(${translateX.pixels}px)`, transition: `all ${translateX.transition}s`
            }}
            className={styles.testimonialSlider}>
            {tempTestimonials.map((element, index) => (
              <Slide
                key={index}
                src={element.src}
                title={element.title}
                testimonial={element.testimonial}
              />
            ))}
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
        </div>
      </>
    );
    // MOBILE
  } else {
    const handleSlideIndex = index => (e) => {
      console.log(index)
      if (index === 0) {
        setSlideIndex({
          ...slideIndex,
          dot: index,
          pixels: 0
        })
      } else if (index === 1) {
        setSlideIndex({
          ...slideIndex,
          dot: index,
          pixels: -370
        })
      } else if (index === 2) {
        setSlideIndex({
          ...slideIndex,
          dot: index,
          pixels: -740
        })
      } else if (index === 3) {
        setSlideIndex({
          ...slideIndex,
          dot: index,
          pixels: -1110
        })
      }
    }

    return (
      <>
        <div className={styles.testimonialContainer}>
          <div className={styles.testimonialTitle}>
            What they’ve said
          </div>
          <div
            style={{ transform: `translateX(${slideIndex.pixels}px)`, transition: `all 1s` }}
            className={styles.testimonialSlider}>
            {tempTestimonials.map((element, index) => (
              <Slide
                key={index}
                src={element.src}
                title={element.title}
                testimonial={element.testimonial}
              />
            ))}
          </div>
          <div className={styles.testimonialNavigation}>
            <span onClick={handleSlideIndex(0)} className={styles.dot}></span>
            <span onClick={handleSlideIndex(1)} className={styles.dot}></span>
            <span onClick={handleSlideIndex(2)} className={styles.dot}></span>
            <span onClick={handleSlideIndex(3)} className={styles.dot}></span>
          </div>
          <div className={styles.testimonialButtonContainer}>
            <button>Get Started</button>
          </div>
        </div>
      </>
    );


  }




}

