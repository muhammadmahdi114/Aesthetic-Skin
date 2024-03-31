import React from 'react';

const Notification = ({ message, type }) => {
    let bgColor = '';
    if (type === 'Green') {
        bgColor = 'bg-green-500';
    } else if (type === 'Red') {
        bgColor = 'bg-red-500';
    }

    return (
        <div className={`${bgColor} text-white p-3 rounded`}>
            <p>{message}</p>
        </div>
    );
};

export default Notification;