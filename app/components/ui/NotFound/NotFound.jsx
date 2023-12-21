import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import styles from './NotFound.module.scss'


const NotFound = () => {

    return (
        <section className={styles.notFound}>
            <div className={styles.notFound__item}>
                <h2 className={styles.notFound__item__title}>
                    4<span className={styles.notFound__item__title__zero}></span>4
                </h2>
                <Link href="/"></Link>
            </div>
        </section>
    )
}

export default NotFound;