import * as React from 'react';
import Link from 'next/link'
import styles from './NotFound.module.scss'


const NotFound = () => {

    return (
        <section className={styles.notFound}>
            <div className={styles.notFound__item}>
                <h2 className={styles.notFound__item__title}>
                    4<span className={styles.notFound__item__title__zero}></span>4
                </h2>
                <Link className={styles.notFound__item__link} href="/">Return to Home</Link>
            </div>
        </section>
    )
}

export default NotFound;