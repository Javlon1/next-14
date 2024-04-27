import * as React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import { Context } from '../../ui/Context/Context';
import me from "../../../../public/img/me.jpg"

const Header = () => {
    const { close, setClose } = React.useContext(Context);
    const { pathname } = useRouter();
    const [headerData, setHeaderData] = React.useState();

    const [mail, setMail] = React.useState(false);
    const [bell, setBell] = React.useState(false);
    const [main, setMain] = React.useState(false);
    const [popUp, setPopUp] = React.useState(false);
    const [ham, setham] = React.useState(false);


    //
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/menu`, {
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
    }, []);
    //

    return (
        <div className={`${styles.nav} ${close ? styles.close : ""}`}>
            <div
                className={`${styles.opacity} ${ham ? styles.opacityAct : ""}`}
                onClick={() => {
                    setham(false)
                    setClose(false)
                }}
            ></div>
            {/* sidebar start */}
            <aside className={`${styles.sidebar} ${ham ? styles.actHam : ""}`}>
                <div className={styles.sidebar__top}>
                    <Link href={'/'}>
                        <Image
                            src={me}
                            alt='logo'
                            priority
                        />
                    </Link>
                    <div className={styles.x}
                        onClick={() => { setham(false) }}>
                        <i className="fa-solid fa-x"></i>
                    </div>
                    <div
                        className={styles.sidebar__top__ham}
                        onClick={() => {
                            setClose(!close)
                        }}

                    >
                        <div className={styles.sidebar__top__ham__btnHam}></div>
                    </div>
                </div>
                {/* navbar start */}
                <nav className={styles.sidebar__nav}>
                    <ul className={styles.sidebar__nav__list}>
                        {
                            headerData?.map((item) => (
                                <li
                                    key={item.id}
                                    className={`${pathname === item.link ? styles.active : ""}`}
                                >
                                    <Link
                                        href={item.link}
                                    >
                                        <i className={item.icon}></i>
                                        <p>
                                            {item.nav}
                                        </p>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                {/* navbar end */}
            </aside>
            {/* sidebar end */}

            {/* header start */}
            <header className={styles.header}>
                <div className={styles.header__hamburger}
                    onClick={() => {
                        setham(!ham)
                        setClose(false)
                    }}
                ></div>
                <div className={styles.header__search}>
                    <form className={styles.form}>
                        <button type='submit'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <input
                            type="text"
                            placeholder='Search ...'
                        />
                    </form>
                </div>
                <div className={styles.header__list}>
                    <div className={styles.header__list__item}>
                        <div className={styles.header__list__item__icon}>
                            <button
                                className={`${mail ? styles.btnAct : ""}`}
                                onClick={() => {
                                    setMail(!mail)
                                    setBell(false)
                                    setMain(false)
                                    setPopUp(false)
                                }}
                            >
                                <i className="fa-solid fa-envelope"></i>
                            </button>
                        </div>
                        <div className={styles.header__list__item__popupModal}>
                            <div className={`${styles.header__list__item__popupModal__main} ${mail ? styles.popupAct : ""}`} >
                                <div className={styles.header__list__item__popupModal__main__header}>
                                    <Image
                                        src={me}
                                        alt='me'
                                        priority
                                    />
                                    <div>
                                        <b>Javlon</b>
                                        <p>Mukhammadjonov@gmail.com</p>
                                        <Link href={'/'}>
                                            View Profile
                                        </Link>
                                    </div>
                                </div>
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.header__list__item}>
                        <div className={styles.header__list__item__icon}>
                            <button
                                className={`${bell ? styles.btnAct : ""}`}
                                onClick={() => {
                                    setBell(!bell)
                                    setMail(false)
                                    setMain(false)
                                    setPopUp(false)
                                }}
                            >
                                <i className="fa-solid fa-bell"></i>
                            </button>
                        </div>
                        <div className={styles.header__list__item__popupModal}>
                            <div className={`${styles.header__list__item__popupModal__main} ${bell ? styles.popupAct : ""}`} >
                                <div className={styles.header__list__item__popupModal__main__header}>
                                    <Image
                                        src={me}
                                        alt='me'
                                        priority
                                    />
                                    <div>
                                        <b>Javlon</b>
                                        <p>Mukhammadjonov@gmail.com</p>
                                        <Link href={'/'}>
                                            View Profile
                                        </Link>
                                    </div>
                                </div>
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.header__list__item}>
                        <div className={styles.header__list__item__icon}>
                            <button
                                className={`${main ? styles.btnAct : ""}`}
                                onClick={() => {
                                    setMain(!main)
                                    setBell(false)
                                    setMail(false)
                                    setPopUp(false)
                                }}
                            >
                                <i className="fa-solid fa-layer-group"></i>
                            </button>
                        </div>
                        <div className={styles.header__list__item__popupModal}>
                            <div className={`${styles.header__list__item__popupModal__main} ${main ? styles.popupAct : ""}`} >
                                <div className={styles.header__list__item__popupModal__main__header}>
                                    <Image
                                        src={me}
                                        alt='me'
                                        priority
                                    />
                                    <div>
                                        <b>Javlon</b>
                                        <p>Mukhammadjonov@gmail.com</p>
                                        <Link href={'/'}>
                                            View Profile
                                        </Link>
                                    </div>
                                </div>
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.header__list__item}>
                        <div
                            className={styles.header__list__item__icon}
                            onClick={() => {
                                setPopUp(!popUp)
                                setMain(false)
                                setBell(false)
                                setMail(false)
                            }}
                        >
                            <Image
                                src={me}
                                alt='me'
                                priority
                            />
                        </div>
                        <div className={styles.header__list__item__popupModal}>
                            <div className={`${styles.header__list__item__popupModal__main} ${popUp ? styles.popupAct : ""}`} >
                                <div className={styles.header__list__item__popupModal__main__header}>
                                    <Image
                                        src={me}
                                        alt='me'
                                        priority
                                    />
                                    <div>
                                        <b>Javlon</b>
                                        <p>Mukhammadjonov@gmail.com</p>
                                        <Link href={'/'}>
                                            View Profile
                                        </Link>
                                    </div>
                                </div>
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* header end */}
        </div>
    );
};

export default Header;