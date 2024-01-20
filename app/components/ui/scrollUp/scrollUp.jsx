import { useState, useEffect } from 'react';
import styles from './scrollUp.module.scss';

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 100;
            setIsVisible(scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`${styles.scrollUp} ${isVisible ? styles.visible : ''}`} onClick={scrollToTop}>
            <span>&uarr;</span>
        </div>
    );
}; 

export default ScrollUp;
