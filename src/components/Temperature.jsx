import React, { useState } from 'react'

const Temperature = () => {
    const [Celsius, setCelsius] = useState(0)
    const [Fahrenheit, setFahrenheit] = useState(32)
    const HandleFahrenheit = (e) => {
        const val = e.target.value;
        setFahrenheit(val)
        setCelsius(ftoc(val));
    }
    
    const HandleCelsius = (e) => {
        const val = e.target.value;
        setCelsius(val)
        setFahrenheit(ctof(val));
    }
    const ftoc = (Fahrenheit) => {
        return ((Fahrenheit-32)*5)/9;
    }
    const ctof = (Celsius) => {
        return ((Celsius*9)/5)+32;
    }
    return (
        <div>
            <div>Temperature Converter</div>
            <div>
                <label>Celcius</label>
                <input type="text" value={Celsius} onChange={HandleCelsius} />
            </div>
            <div>
                <label>Fahrenheit</label>
                <input type="text" value={Fahrenheit} onChange={HandleFahrenheit} />
            </div>
        </div>
    )
}

export default Temperature
