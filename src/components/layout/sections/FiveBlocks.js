import ColumnBlock from '../blocks/ColumnBlock'
import styles from './FiveBlocks.module.css'

const FiveBlocks = ({articles=[]}) => {
    return(
        <section className={styles.five_blocks}>
            {articles?.map(article=>
                <ColumnBlock
                    img={article.image}
                    titulo={article.title}
                    url={article.url}
                    type="title_overlay"
                />
            )}
            <div className={styles.highlight}>aaaaa</div>
        </section>
    )
}
export default FiveBlocks