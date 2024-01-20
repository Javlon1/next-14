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
    const { pathname } = useRouter();
    const [headerData, setHeaderData] = React.useState();

    //
    const endpointGet = 'menu';
    const fullUrl = `${url}/${endpointGet}/`;

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(fullUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }

                const data = await response.json();

                if (data) {
                    setHeaderData(data);
                } else {
                    console.error('Ошибка: Некорректные данные получены от сервера.');
                }

            } catch (error) {
                console.error('Ошибка при запросе данных:', error.message);
            }
        };

        fetchData();
    }, [fullUrl]);
    //

    const handleNavClick = () => {
        setNav(false);
    };

    return (
        <header id="header" className={styles.header}>
            <MyContainer>
                <nav className={styles.header__nav}>
                    <Link onClick={handleNavClick} className={styles.header__nav__link} href="/">
                        <Image
                            className={styles.header__nav__link__img}
                            src={`https://www.shutterstock.com/shutterstock/photos/353675519/display_1500/stock-vector-j-letter-logo-formed-by-twisted-lines-wool-mark-font-style-vector-design-template-elements-for-353675519.jpg`}
                            width={157}
                            height={50}
                            alt="logo"
                            priority={true}
                        />
                    </Link>
                    <ul className={`${styles.header__nav__list} ${nav ? styles.active_nav : ""}`} onClick={handleNavClick}>
                        {
                            headerData ? (headerData?.map((item) => (
                                <li key={item.id} className={styles.header__nav__list__item}>
                                    <Link
                                        className={`${styles.header__nav__list__item__link} ${pathname === item.link ? styles.active : ""}`}
                                        href={item.link}
                                    >
                                        {item[`nav_${lan}`]}
                                    </Link>
                                </li>
                            ))) : (
                                <ul className={styles.header__nav__list}>
                                    <li className={styles.headerSkeleton}></li>
                                    <li className={styles.headerSkeleton}></li>
                                    <li className={styles.headerSkeleton}></li>
                                    <li className={styles.headerSkeleton}></li>
                                </ul>
                            )
                        }
                        <Language />
                    </ul>
                    <button className={styles.header__nav__btn}>
                        <Link href="/contact" className={styles.header__nav__btn__link}>
                            Contact
                        </Link>
                    </button>
                    <div onClick={() => setNav(!nav)} className={`${styles.header__nav__btnHam} ${nav ? styles.active_Ham : ""}`}></div>
                </nav>
            </MyContainer>
        </header>
    );
};

export default Header;