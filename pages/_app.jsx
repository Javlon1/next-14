import Layout from "@/app/components/layout/Layout";
import '@/app/assets/globals.scss';
import { Provider } from "@/app/components/ui/Context/Context";
import { useEffect, useRef } from "react";

const myApp = ({ Component, pageProps }) => {
    // 

    const videoRef = useRef(null);
    const ws = useRef(null);

    useEffect(() => {
        const setupWebSocket = () => {
            ws.current = new WebSocket('ws://localhost:3001');

            ws.current.onopen = () => console.log('WebSocket connected');
            ws.current.onclose = (event) => console.log('WebSocket disconnected:', event.code, event.reason);
            ws.current.onerror = (error) => console.error('WebSocket error:', error);
        };

        const getMedia = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;

                    const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });
                    const chunks = [];

                    mediaRecorder.ondataavailable = (event) => {
                        if (event.data.size > 0) {
                            chunks.push(event.data);

                            // Преобразование Blob в ArrayBuffer
                            const buffer = event.data.arrayBuffer();

                            // Отправка данных на сервер через WebSocket
                            ws.current.send(buffer);
                        }
                    };

                    mediaRecorder.start(100);  // Установка интервала в 100 миллисекунд для частых событий ondataavailable
                }
            } catch (error) {
                console.error('Error accessing media devices:', error);
            }
        };

        const cleanup = () => ws.current?.close();

        setupWebSocket();
        getMedia();

        return cleanup;
    }, []);
    // 


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

    return (
        <Provider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default myApp;