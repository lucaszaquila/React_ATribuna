import styles from './NavbarContainer.module.css';

const NavbarContainer = ({children, customClass}) => {
    return <div className={`${styles.navbar_container} ${styles[customClass]}`}>{children}</div>
}

export default NavbarContainer