import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import styles from './SocialLinks.module.css'

const SocialLinks = () => {
    return (
            <ul className={styles.social_links}>
                <li>
                    <a href="https://www.facebook.com" target="blank_">
                        <FaFacebook />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com" target="blank_">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" target="blank_">
                        <FaTwitter />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com" target="blank_">
                        <FaYoutube />
                    </a>
                </li>
            </ul>
    )
}

export default SocialLinks