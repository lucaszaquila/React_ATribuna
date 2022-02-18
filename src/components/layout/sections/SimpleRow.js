import ColumnBlock from './blocks/ColumnBlock'
import barco from '../../../img/barco.webp'

const SimpleRow = () => {
    return(
        <section>
            <ColumnBlock 
                img={barco} 
                editoria="Navios" 
                titulo="Iniciativa financia em até R$ 2 milhões diversos projetos na Baixada Santista"
                subtitulo="José Ricardo Ribeiro criou um trajeto de ida e volta de Santos a Cubatão"
                url="www.google.com"
            />
            <ColumnBlock />
            <ColumnBlock />
            <ColumnBlock />
        </section>
    )
}
export default SimpleRow