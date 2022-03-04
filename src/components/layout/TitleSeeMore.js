import styles from './TitleSeeMore.module.css'

import { MdOutlineArrowForwardIos } from 'react-icons/md'

const TitleSeeMore = ({title}) => {
    return (
        <div className={styles.title}>
            {title} 
            <MdOutlineArrowForwardIos /> 
            <a hrf="#">veja mais de {title}</a>
            <hr></hr>
        </div>
    )
}
export default TitleSeeMore;