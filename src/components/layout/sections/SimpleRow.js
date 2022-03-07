import { useEffect, useState } from 'react'

import ColumnBlock from '../blocks/ColumnBlock'
import barco from '../../../img/barco.webp'
import styles from './SimpleRow.module.css'

const SimpleRow = ({articles=[], hide=false}) => {
    return(
        <section className={styles.simple_row}>
            {hide? articles?.map(article=>
                <ColumnBlock
                    img={article.image}
                    titulo={article.title}
                    url={article.url}
                />
            ) :  articles?.map(article=>
                <ColumnBlock
                    img={article.image}
                    editoria={article?.call}
                    titulo={article.title}
                    subtitulo={article?.subtitle}
                    url={article.url}
                />
            )}
        </section>
    )
}
export default SimpleRow