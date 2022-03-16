import { useState, useEffect } from 'react'

import ColumnBlock from '../blocks/ColumnBlock'
import styles from './FiveBlocks.module.css'

const FiveBlocks = ({articles=[], invert}) => {
    const [inverted, setInverted] = useState("highlight")
    const highlightArticle = articles.slice(0,1)
    const sideArticles = articles.slice(1,5)

    useEffect(() => {
        if(invert){
            setInverted("highlight_inverted")
         }
    },[])

    return(
        <section className={styles.five_blocks}>
            {sideArticles?.map((article)=>
                <ColumnBlock
                    img={article.image}
                    titulo={article.title}
                    url={article.url}
                    customClass="title_overlay"
                    key={article.title}
                />
            )}
            {highlightArticle?.map((article) =>
                <ColumnBlock
                    img={article.image}
                    titulo={article.title}
                    url={article.url}
                    customClass="title_overlay"
                    type={inverted}
                    key={article.title}
                />
            )}
        </section>
    )
}
export default FiveBlocks