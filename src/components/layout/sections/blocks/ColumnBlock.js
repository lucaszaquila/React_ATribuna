const ColumnBlock = ({editoria, titulo, subtitulo, img, url}) => {
    return(
        <a href={url}>
            <img src={img} alt={titulo} />
            <h4>{editoria}</h4>
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
        </a>
    )
}
export default ColumnBlock