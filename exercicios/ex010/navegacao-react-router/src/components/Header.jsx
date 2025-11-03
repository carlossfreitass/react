import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <h1>Navegação com React Router</h1>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li><Link to="/" className={styles.item}>Home</Link></li>
                    <li><Link to="/sobre" className={styles.item}>Sobre</Link></li>
                    <li><Link to="/contato" className={styles.item}>Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header