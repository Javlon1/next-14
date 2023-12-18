import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MyContainer from '../../ui/MyContainer/MyContainer'
import styles from './Footer.module.scss'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <MyContainer>
                <h1>Footer</h1>
            </MyContainer>
        </footer>
    )
}

export default Footer;