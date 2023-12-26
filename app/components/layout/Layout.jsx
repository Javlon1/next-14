import styles from './Layout.module.scss';
import Footer from './footer/Footer';
import Header from './header/Header';
import ScrollUp from '../ui/scrollUp/scrollUp';


const Layout = ({ children }) => {
    return (
        <div>
            <main className={styles.layout}>
                <Header />
                {children}
                <Footer />
                <ScrollUp />
            </main>
        </div>
    )
}

export default Layout;