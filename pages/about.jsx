import * as React from 'react'
import Head from 'next/head'

const About = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="" /> // Описание страницы
                <meta name="keywords" content="" /> // ключевые, слова, страницы
                <meta name="image_src" content="" /> // URL для img

                <meta property="og:title" content="About" /> // Название страницы
                <meta property="og:description" content="" /> // Описание страницы
                <meta property="og:image" content="" /> // URL для img: https://example.com/image.jpg
                <meta property="og:url" content="" /> // оснавное URL: https://example.com/page-url
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="" /> // Название сайта
                <meta property="og:locale" content="ru_RU" />

                <title>About</title>
            </Head>

            <main>
                <h1 style={{
                    height: "100vh"
                }}>About</h1>
                <h1 style={{
                    height: "100vh"
                }}>About</h1>
            </main>
        </>
    )
}

export default About;