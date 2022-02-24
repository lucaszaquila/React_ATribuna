import ColumnBlock from '../blocks/ColumnBlock'
import barco from '../../../img/barco.webp'
import styles from './SimpleRow.module.css'

const SimpleRow = () => {
    return(
        <section className={styles.simple_row}>
            <ColumnBlock 
                img={barco} 
                editoria="Navios" 
                titulo="Iniciativa financia em até R$ 2 milhões diversos projetos na Baixada Santista"
                subtitulo="José Ricardo Ribeiro criou um trajeto de ida e volta de Santos a Cubatão"
                url="www.google.com"
            />
            <ColumnBlock 
                img={barco} 
                editoria="Navios" 
                titulo="Iniciativa financia em até R$ 2 milhões diversos projetos na Baixada Santista"
                subtitulo="José Ricardo Ribeiro criou um trajeto de ida e volta de Santos a Cubatão"
                url="www.google.com"
            />
            <ColumnBlock 
                img={barco} 
                editoria="Navios" 
                titulo="Iniciativa financia em até R$ 2 milhões diversos projetos na Baixada Santista"
                subtitulo="José Ricardo Ribeiro criou um trajeto de ida e volta de Santos a Cubatão"
                url="www.google.com"
            />
            <ColumnBlock 
                img={barco} 
                editoria="Navios" 
                titulo="Iniciativa financia em até R$ 2 milhões diversos projetos na Baixada Santista"
                subtitulo="José Ricardo Ribeiro criou um trajeto de ida e volta de Santos a Cubatão"
                url="www.google.com"
            />
        </section>
    )
}
export default SimpleRow