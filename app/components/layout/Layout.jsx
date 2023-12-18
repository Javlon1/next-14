import styles from './Layout.module.scss';
import Footer from './footer/Footer';
import Header from './header/Header';


const Layout = ({ children }) => {
    return (
        <div>
            <main className={styles.layout}>
                <Header/>
                {children}
                <Footer/>
            </main>
        </div>
    )
}

export default Layout;