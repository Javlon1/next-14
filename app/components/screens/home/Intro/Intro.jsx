import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Intro.module.scss'
import { Context } from '@/app/components/ui/Context/Context';

const Intro = () => {
    const { close } = React.useContext(Context);

    return (
        <section className={`${styles.intro} ${close ? styles.close : ""}`}>
            <div className={styles.intro__top}>
                <div className={styles.intro__top__name}>
                    <h2>Name</h2>
                    <p>Statitika</p>
                </div>
                <div>
                    <Link href={'/'}>
                        <p>Manage</p>
                    </Link>
                    <Link href={'/'}>
                        <p>Add Customer</p>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default Intro;