import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Loader.module.scss'


const Loader = () => {
    return (
        <div className={`${styles.loader}`}>
            <div className={styles.loader__ring}></div>
            <div className={styles.loader__ring}></div>
            <div className={styles.loader__ring}></div>
            <span className={styles.loader__loading}>Loading...</span>
        </div>
    )
}

export default Loader;