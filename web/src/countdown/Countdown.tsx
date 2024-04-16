import { FC, useEffect, useState } from "react";

export const Countdown: FC<{ to: Date }> = ({ to }) => {
    const [now, setNow] = useState(Date.now());

    const hoursLeft = Math.floor((to.getTime() - now) / 1000 / 60 / 60);
    const minutesLeft = Math.floor((to.getTime() - now) / 1000 / 60 % 60);
    const secondsLeft = Math.floor((to.getTime() - now) / 1000 % 60);

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }
    , []);

    return (
        <div>
            <div className="text-timer" title={`Time left till ${to.getTime()}`}>
                <span>{hoursLeft.toString().padStart(2, '0')}</span>
                <span>:</span>
                <span>{minutesLeft.toString().padStart(2, '0')}</span>
                <span>:</span>
                <span>{secondsLeft.toString().padStart(2, '0')}</span>
            </div>
        </div>
    )
};
