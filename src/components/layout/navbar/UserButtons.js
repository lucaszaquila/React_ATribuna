import { FaSearch } from 'react-icons/fa'

import Button from '../Button.js'
import styles from './UserButtons.module.css'

const UserButtons = ({customClass}) => {
    return(
        <div className={`${styles.user_buttons} ${styles[customClass]}`}>
            <FaSearch/>
            <Button text="Assine" customClass="sign"/>
            <Button text="Clube" customClass="club" />
            <Button text="Entrar" customClass="login" />
        </div>
    )

}

export default UserButtons