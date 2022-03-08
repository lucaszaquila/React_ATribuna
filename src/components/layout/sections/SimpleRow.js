import ColumnBlock from '../blocks/ColumnBlock'
import styles from './SimpleRow.module.css'

const SimpleRow = ({articles=[], hide}) => {
    articles = articles?.slice(0,4)
    return(
        <section className={styles.simple_row}>
            {!hide? articles?.map((article, index) =>
                <ColumnBlock
                    img={article.image}
                    editoria={article?.call}
                    titulo={article.title}
                    subtitulo={article?.subtitle}
                    url={article.url}
                    key={index}
                />
            ) :  articles?.map((article, index) =>
                <ColumnBlock
                    img={article.image}
                    titulo={article.title}
                    url={article.url}
                    key={index}
                />
            )}
        </section>
    )
}
export default SimpleRow