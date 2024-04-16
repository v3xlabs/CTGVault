import { FC, useEffect } from "react";

export const Countdown: FC<{ to: Date }> = ({ to }) => {

    const hoursLeft = Math.floor((to.getTime() - Date.now()) / 1000 / 60 / 60);
    const minutesLeft = Math.floor((to.getTime() - Date.now()) / 1000 / 60 % 60);
    const secondsLeft = Math.floor((to.getTime() - Date.now()) / 1000 % 60);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('time left:', hoursLeft, minutesLeft, secondsLeft);
        }, 1000);

        return () => clearInterval(interval);
    }
        , []);

    return (
        <div>
            <div className="text-timer" title={`Time left till ${to.getTime()}`}>
                <span>{hoursLeft}</span>
                <span>:</span>
                <span>{minutesLeft}</span>
                <span>:</span>
                <span>{secondsLeft}</span>
            </div>
        </div>
    )
};
