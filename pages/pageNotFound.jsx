import * as React from 'react'
import Head from 'next/head'
import NotFound from '@/app/components/ui/NotFound/NotFound';

const PageNotFound = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Page Not Found" /> // Описание страницы
                <meta name="keywords" content="Page Not Found" /> // ключевые слова, страницы
                <meta name="image_src" content="" /> // URL для img

                <meta property="og:title" content="Page Not Found" /> // Название страницы
                <meta property="og:description" content="Page Not Found" /> // Описание страницы
                <meta property="og:image" content="" /> // URL для img: https://example.com/image.jpg
                <meta property="og:url" content="" /> // оснавное URL: https://example.com/page-url
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="" /> // Название сайта
                <meta property="og:locale" content="ru_RU" />

                <title>Page Not Found</title>
            </Head>

            <div>
                <NotFound />
            </div>
        </>
    )
}

export default PageNotFound;