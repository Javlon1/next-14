import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Intro.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
 

const Intro = () => {
    const { lan } = React.useContext(Context);

    return (
        <section className={styles.intro}>
            <MyContainer>
                <h1>Intro next 14</h1>
            </MyContainer>
        </section>
    )
}

export default Intro;