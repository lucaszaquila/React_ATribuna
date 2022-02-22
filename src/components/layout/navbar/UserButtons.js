import { FaSearch } from 'react-icons/fa'

import Button from '../Button.js'
import styles from './UserButtons.module.css'

const UserButtons = ({customClass, text1, text2, text3}) => {
    return(
        <div className={`${styles.user_buttons} ${styles[customClass]}`}>
            <FaSearch/>
            <Button text={text1} customClass="sign"/>
            <Button text={text2} customClass="club" />
            <Button text={text3} customClass="login" />
        </div>
    )

}

export default UserButtons