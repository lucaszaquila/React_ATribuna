import styles from './Ad.module.css'
import ad from '../../../../img/ad.jpeg';

const Ad = () => {
    return (
        <div className={styles.ad}>
            <img src={ad} alt="AD"/>
        </div>
    )
}

export default Ad