import styles from './Layout.module.scss';
import Header from './header/Header';
import ScrollUp from '../ui/scrollUp/scrollUp';


const Layout = ({ children }) => {
    return (
        <div>
            <main className={styles.layout}>
                <Header />
                {children}
                <ScrollUp />
            </main>
        </div>
    )
}

export default Layout;