import * as React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Language from '../../ui/language/Language';
import styles from './Header.module.scss';
import { Context } from '../../ui/Context/Context';
import MyContainer from '../../ui/MyContainer/MyContainer';

const Header = () => {
    const { lan, url } = React.useContext(Context);
    const [nav, setNav] = React.useState(false);
    const [headerData, setHeaderData] = React.useState();
    const { pathname } = useRouter();

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${url}/menu`);
                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }
                const data = await response.json();
                setHeaderData(data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, [url]);


    const handleNavClick = () => {
        setNav(false);
    };

    return (
        <header id="header" className={styles.header}>
            <MyContainer>
                <nav className={styles.header__nav}>
                    <Link className={styles.header__nav__link} href="/">
                        <Image
                            className={styles.header__nav__link__img}
                            src={`https://westeracademy.uz/static/assets/img/logo.png`}
                            width={157}
                            height={50}
                            alt="logo"
                            priority={true}
                        />
                    </Link>
                    <ul className={`${styles.header__nav__list} ${nav ? styles.active_nav : ""}`} onClick={handleNavClick}>
                        {headerData?.map((item) => (
                            <li key={item.id} className={styles.header__nav__list__item}>
                                <Link
                                    className={`${styles.header__nav__list__item__link} ${pathname === item.link ? styles.active : ""}`}
                                    href={item.link}
                                >
                                    {item[`nav_${lan}`]}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className={styles.header__nav__btn}>
                        <Link href="/contact" className={styles.header__nav__btn__link}>
                            Contact
                        </Link>
                    </button>
                    <Language />
                    <div onClick={() => setNav(!nav)} className={`${styles.header__nav__btnHam} ${nav ? styles.active_Ham : ""}`}></div>
                </nav>
            </MyContainer>
        </header>
    );
};

export default Header;