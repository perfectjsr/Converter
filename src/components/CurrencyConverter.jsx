import React, { useState } from 'react'

const CurrencyConverter = () => {
    const [Dollar, setDollar] = useState(1)
    const [INR, setINR] = useState(82.72)
    const HandleINR = (e) => {
        const val = e.target.value;
        setINR(val)
        setDollar(itod(val));
    }

    const HandleDollar = (e) => {
        const val = e.target.value;
        setDollar(val)
        setINR(dtoi(val));
    }
    const itod = (INR) => {
        return INR * 0.012;
    }
    const dtoi = (Dollar) => {
        return Dollar * 82.72;
    }
    return (
        <div>
            <div>Dollar-INR Converter</div>
            <div>
                <label>Dollar:- </label>
                <input type="text" value={Dollar} onChange={HandleDollar} />
            </div>
            <div>
                <label>INR:- </label>
                <input type="text" value={INR} onChange={HandleINR} />
            </div>
        </div>
    )
}

export default CurrencyConverter
