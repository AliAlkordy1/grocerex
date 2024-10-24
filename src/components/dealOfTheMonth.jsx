import './../dealofthemonth.css';
import  { useState, useEffect } from 'react';
import moment from 'moment';

export default function DealOfTheMonth() {
    const calculateTimeLeft = () => {
        const now = moment();
        const endOfMonth = moment().endOf('month');
        const duration = moment.duration(endOfMonth.diff(now));

        return {
            days: duration.days(),
            hours: duration.hours(),
            minutes: duration.minutes(),
            seconds: duration.seconds(),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="deal-of-the-month">
                <img src="https://bestyet.com/wp-content/uploads/2021/05/21351_BY_1.5qt_Vanilla_Ice_Cream.png" alt="Ice Cream" />
                <div className="deal-of-the-month-details">
                    <h3>Deals of The Month</h3>
                    <h2>Buy 1 Ice Cream Tub And Get 1 Free</h2>
                    <p>is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry`&apos`s standard.</p>
                    <div className="countdown">
                        <p>Time Left:</p>
                        <p>Days: {timeLeft.days}</p>
                        <p>Hours: {timeLeft.hours}</p>
                        <p>Minutes: {timeLeft.minutes}</p>
                        <p>Seconds: {timeLeft.seconds}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
