import * as React from 'react';
import Link from 'next/link'
import styles from './NotFound.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'


const NotFound = () => {

    return (
        <section className={styles.notFound}>
            <MyContainer>
                <div className={styles.notFound__item}>
                    <h1>404!</h1>
                    <p>Sorry! The Page Not Found</p>
                    <span>Oops! The page you are looking for does not exit. it might been moved or deleted.</span>
                    <Link href="/">
                        Return to Home
                    </Link>
                </div>
            </MyContainer>
        </section>
    )
}

export default NotFound;