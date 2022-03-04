import styles from './TextBlock.module.css'

import { BsCaretRightFill } from 'react-icons/bs'

const TextBlock = () => {
    return (
        <div className={styles.text}>
            <h2>Deputados da Baixada Santista se unem por fim de taxas de marinha</h2>
            <h3>Objetivo é que Senado também aprove medida que encerraria laudêmio</h3>
            <span>Veja mais:</span>
            <p><BsCaretRightFill/> Jovem morre após ser esfaqueado pelo irmão de 17 anos no litoral de SP</p>
            <p><BsCaretRightFill/> Marimex e Ultracargo: Porto de Santos conta com novas vagas de emprego</p>
        </div>
    )
}

export default TextBlock