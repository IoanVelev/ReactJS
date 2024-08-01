import { useState, useEffect } from "react";
import styles from './Timer.module.css';

export default function Timer() {
    const [time, setTime] = useState(() => {
        const currentSeconds = new Date().getSeconds();


        return currentSeconds;
    });

    useEffect(() => {
        console.log('Effect');
    }, []);

    setTimeout(() => {
        setTime(oldTime => oldTime + 1);
    }, 1000);

    return (
        <>
        <h1 className={styles['main-timer']}>Timer</h1>
        <div>{time}</div>
        </>
    )
}