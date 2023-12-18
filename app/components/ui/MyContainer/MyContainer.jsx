import * as React from 'react';
import styles from './MyContainer.module.scss'


const MyContainer = ({ children }) => {

    return (
        <div className={styles.myContainer}>
            {
                React.Children.map(children, (child) => {
                    return React.cloneElement(child);
                })
            }
        </div>
    );
};

export default MyContainer;