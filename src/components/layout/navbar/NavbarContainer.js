import { useMemo } from 'react';
import styles from './NavbarContainer.module.css';

const NavbarContainer = ({children, customClass=[]}) => {
    const className = useMemo(()=>
        customClass.reduce(
        (previousValue, currentValue) => `${previousValue} ${styles[currentValue]}`,
            ''
        ),
    [customClass])

    return <div className={`${styles.navbar_container} ${className}`}>{children}</div>
}

export default NavbarContainer