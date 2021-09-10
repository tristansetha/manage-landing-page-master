import Image from 'next/image'
import styles from './slider.module.css'
import { useState, useEffect } from 'react'

export const Slide = ({ src, title, testimonial }) => {
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
  let tempTestimonials = testimonials

  const [translateX, setTranslateX] = useState({
    pixels: 0,
    count: 0,
    transition: 1
  })



  const handleClassChange = () => {
    setTranslateX({
      transition: 1,
      count: translateX.count + 1,
      pixels: translateX.pixels + 570
    })

  }

  setTimeout(() => {
    handleClassChange()
  }, 8000)

  useEffect(() => {
    if (translateX.count === tempTestimonials.length - 2) {
      setTranslateX({
        transition: 0,
        pixels: 0,
        count: 0
      })
    }
  }), [translateX]

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
}

