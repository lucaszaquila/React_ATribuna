import ColumnBlock from '../blocks/ColumnBlock'
import styles from './FiveBlocks.module.css'

const FiveBlocks = ({articles=[], invert}) => {
    const highlightArticle = articles.slice(0,1)
    const sideArticles = articles.slice(1,5)


    return(
        <section className={styles.five_blocks}>
            {sideArticles?.map((article, index)=>
                <ColumnBlock
                    img={article.image}
                    titulo={article.title}
                    url={article.url}
                    customClass="title_overlay"
                    key={index}
                />
            )}
            { !invert ? 
                (<>
                    {highlightArticle?.map((article, index) =>
                        <ColumnBlock
                            img={article.image}
                            titulo={article.title}
                            url={article.url}
                            customClass="title_overlay"
                            type="highlight"
                            key={index+100}
                        />
                    )}
                </>) : (<>
                    {highlightArticle?.map((article, index) =>
                        <ColumnBlock
                            img={article.image}
                            titulo={article.title}
                            url={article.url}
                            customClass="title_overlay"
                            type="highlight_inverted"
                            key={index+100}
                        />
                    )}
                </>)
            }
            
        </section>
    )
}
export default FiveBlocks