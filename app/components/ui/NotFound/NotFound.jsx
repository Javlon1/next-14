import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import styles from './NotFound.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'


const NotFound = () => {

    const urlImg = "https://i.pinimg.com/originals/73/b0/05/73b0054acf8be08b254ba90945a19d09.gif"

    return (
        <section className={styles.notFound}>
            <MyContainer>
                <div className={styles.notFound__item}>
                    <Link href="/">
                        <button>
                            <Image
                                src={urlImg}
                                alt="404"
                                width={50}
                                height={50}
                            />
                        </button>
                    </Link>
                </div>
            </MyContainer>
        </section>
    )
}

export default NotFound;