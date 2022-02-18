import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

import NavbarContainer from './NavbarContainer.js'
import SocialLinks from '../SocialLinks.js'
import Button from '../Button.js'

import styles from './Navbar.module.css'
import logo from '../../../img/logoat.svg'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavbarContainer customClass="top" id="topzera">
                <SocialLinks />
                <div className={styles.user_buttons}>
                    <FaSearch/>
                    <Button text="Assine" customClass="sign"/>
                    <Button text="Clube" customClass="club" />
                    <Button text="Entrar" customClass="login" />
                </div>
            </NavbarContainer>
            <NavbarContainer customClass="mid">
                <span>Fundado em 1894</span>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo A Tribuna"></img>
                    <span>Quinta-feira, 00 de Fevereiro de 2022</span>
                </div>
                <span>Online desde 1996</span>
            </NavbarContainer>
            <NavbarContainer customClass="bot">
                <ul>
                    <li>
                        <Link to="/noticias">Notícias</Link>
                    </li>
                    <li>
                        <Link to="/esportes">Esportes</Link>
                    </li>
                    <li>
                        <Link to="/santos">Santos FC</Link>
                    </li>
                    <li>
                        <Link to="/variedades">Variedades</Link>
                    </li>
                    <li>
                        <Link to="/opiniao">Opinião</Link>
                    </li>
                    <li>
                        <Link to="/projetos">Projetos</Link>
                    </li>
                    <li>
                        <Link to="/covid">Covid</Link>
                    </li>
                    <li>
                        <Link to="/clube">Clube</Link>
                    </li>
                    <li>
                        <Link to="/impresso">Impresso</Link>
                    </li>
                    <li>
                        <Link to="/acervo">Acervo</Link>
                    </li>
                    <li>
                        <Link to="/assinante">Assinante</Link>
                    </li>
                    <li>
                        <Link to="/classificados">Classificados</Link>
                    </li>
                </ul>
            </NavbarContainer>
        </nav>
    )
}

export default Navbar;