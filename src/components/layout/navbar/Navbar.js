import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserAlt } from 'react-icons/fa'
import NavbarContainer from './NavbarContainer.js'
import SocialLinks from '../SocialLinks.js'
import UserButtons from './UserButtons.js'

import styles from './Navbar.module.css'
import logo from '../../../img/logoat.svg'

const Navbar = () => {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    },[])   

    // useEffect(() => {
    //     console.log(offset)
    //     if(!offset && scrolled.includes('scrolled')){
    //         setScrolled((prev)=> {
    //             const filtered = prev.filter((className) => className !== "scrolled")

    //             return filtered
    //         })
    //     }
    //     if(offset && !scrolled.includes("scrolled")){
    //         setScrolled((prev)=> [...prev, "scrolled"])
    //     }
    // },[offset])

    return (
        <nav className={styles.navbar}>
            {!offset ? (
                <>
                    {/* USER INFO */}
                    <NavbarContainer customClass={['top']}>
                        <SocialLinks />
                        <UserButtons 
                            text1="Assine"
                            text2="Clube"
                            text3="Entrar"
                        />
                    </NavbarContainer>

                    {/* HEADER */}
                    <NavbarContainer customClass={['mid']}>
                        <span>Fundado em 1894</span>
                        <div className={styles.logo}>
                            <img src={logo} alt="Logo A Tribuna"></img>
                            <span>Quinta-feira, 00 de Fevereiro de 2022</span>
                        </div>
                        <span>Online desde 1996</span>
                    </NavbarContainer>  

                    {/* NAVBAR */}
                    <NavbarContainer customClass={['bot']}>
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
                </>                     
            ) : (
                // SCROLLED NAVBAR
                <NavbarContainer customClass={['scrolled','drop']}>
                    <GiHamburgerMenu 
                        style={{
                            fontSize: "25px",
                            justifySelf: "start"
                        }}
                    />
                    <div className={styles.logo}>
                        <img src={logo} alt="Logo A Tribuna"></img>
                    </div>
                    <UserButtons 
                        text1="A"
                        text2="C"
                        text3={<FaUserAlt />}
                        customClass="scrolled"
                    />
                </NavbarContainer>
                )
            }
            
        </nav>
    )
}

export default Navbar;