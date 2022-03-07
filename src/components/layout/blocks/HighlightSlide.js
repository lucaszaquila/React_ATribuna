import { useEffect, useState } from "react"

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import styles from './HighlightSlide.module.css'

const HighlightSlide = () => {
  const [articles, setArticles] = useState([])
  const [current, setCurrent] = useState(0)
  const lenght = articles.length
  
  useEffect(() => {
      fetch(`http://localhost:5000/articles/`, {
      method: 'GET',
      headers: {
          'Content-Type' : 'application/json'
      }
    })
    .then((resp) => resp.json())
    .then((data) => {
      if(!Array.isArray(data) || data.lenght <= 0) {
        return null
      }
      setArticles(data.slice(0,3))
    })
    .catch((err) => console.log(err))
      
  }, [])

  const nextSlide = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1)
  }

  return (
    <div className={styles.slider}>
      <IoIosArrowBack className={styles.left_arrow} onClick={prevSlide} />
      <IoIosArrowForward className={styles.right_arrow} onClick={nextSlide}/>
      {articles.map((slide, index) => {
        return(
          <a 
            href={slide.path}
            className={styles.slider}
            key={index}
          >
            <div>
              {index === current && (
                <>
                  <img src={slide.image} alt="Imagem" />
                  <div className={styles.description}>
                    <span>{slide.call}</span>
                    <p>{slide.title}</p>
                  </div>

                </>
              )}
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default HighlightSlide