import styles from './ColumnBlock.module.css'

const ColumnBlock = ({editoria, titulo, subtitulo, img, url, type}) => {
    return(
        <a href={url} className={`${styles.column_block} ${styles.type}`}>
            <img src={img} alt={titulo} />
            <h4>{editoria}</h4>
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
        </a>
    )
}
export default ColumnBlock