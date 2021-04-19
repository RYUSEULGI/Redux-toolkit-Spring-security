import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handlePlus = () => {
        setCount(count + 1);
    };

    const handleMinus = () => {
        setCount(count - 1);
    };

    return (
        <>
            <h1>카운터</h1>
            <span>{count}</span>
            <button onClick={handlePlus}>+1</button>
            <button onClick={handleMinus}>-1</button>
        </>
    );
};

export default Counter;
