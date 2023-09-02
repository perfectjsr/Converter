import React, { useState } from 'react'

const ConverEr = () => {
    const [Curr, setCurr] = useState("")
    
    let flag1 = 0;
    let flag2 = 0;
    const [selectedValue1, setSelectedValue1] = useState("");
    const handleSelectChange1 = (event) => {
        const newValue1 = event.target.value;
        setSelectedValue1(newValue1);
        console.log(newValue1)
        if(newValue1==="INR"){
            flag1 = 1
        }
        else if(newValue1==="Dollar"){
            flag1 = 2
        }
        else if(newValue1==="Euro"){
            flag1 = 3
        }
        else if(newValue1==="Yen"){
            flag1 = 4
        }
    }

    const [selectedValue2, setSelectedValue2] = useState("");
    const handleSelectChange2 = (event) => {
        const newValue2 = event.target.value;
        setSelectedValue2(newValue2);
        console.log(newValue2)
        if(newValue2==="INR"){
            flag2 = 1
        }
        else if(newValue2==="Dollar"){
            flag2 = 2
        }
        else if(newValue2==="Euro"){
            flag2 = 3
        }
        else if(newValue2==="Yen"){
            flag2 = 4
        }
    }

    const HandleTo = (e) => {
        const val = e.target.value;
        if(flag2 === 1){
            setCurr(val)
            if(flag1 === 2){
                setCurr(Curr * 0.012);
            }
            else if(flag1 === 3){
                setCurr(Curr * 0.011);
            }
            else if(flag1 === 4){
                setCurr(Curr * 1.77);
            }
            else{
                setCurr(Curr * 1);
            }
        }
        if(flag2 === 2){
            setCurr(val)
            if(flag1 === 1){
                setCurr(Curr * 82.72);
            }
            else if(flag1 === 3){
                setCurr(Curr * 0.93);
            }
            else if(flag1 === 4){
                setCurr(Curr * 146.23);
            }
            else{
                setCurr(Curr * 1);
            }
        }
        if(flag2 === 3){
            setCurr(val)
            if(flag1 === 1){
                setCurr(Curr * 89.20);
            }
            else if(flag1 === 2){
                setCurr(Curr * 1.08);
            }
            else if(flag1 === 4){
                setCurr(Curr * 157.88);
            }
            else{
                setCurr(Curr * 1);
            }
        }
        if(flag2 === 4){
            setCurr(val)
            if(flag1 === 1){
                setCurr(Curr * 0.57);
            }
            else if(flag1 === 2){
                setCurr(Curr * 0.0068);
            }
            else if(flag1 === 3){
                setCurr(Curr * 0.0063);
            }
            else{
                setCurr(Curr * 1);
            }
        }
    }

    const HandleFrom = (e) => {
        const val = e.target.value;
        if(flag1 === 1){
            setCurr(val)
            if(flag2 === 2){
                setCurr(Curr * 0.012);
            }
            else if(flag2 === 3){
                setCurr(Curr * 0.011);
            }
            else if(flag2 === 4){
                setCurr(Curr * 1.77);
            }
            else{
                setCurr(Curr * 1);
            }
        }
        if(flag1 === 2){
            setCurr(val)
            if(flag2 === 1){
                setCurr(Curr * 82.72);
            }
            else if(flag2 === 3){
                setCurr(Curr * 0.93);
            }
            else if(flag2 === 4){
                setCurr(Curr * 146.23);
            }
            else{
                setCurr(Curr * 1);
            }
        }
        if(flag1 === 3){
            setCurr(val)
            if(flag2 === 1){
                setCurr(Curr * 89.20);
            }
            else if(flag2 === 2){
                setCurr(Curr * 1.08);
            }
            else if(flag2 === 4){
                setCurr(Curr * 157.88);
            }
            else{
                setCurr(Curr * 1);
            }
        }
        if(flag1 === 4){
            setCurr(val)
            if(flag2 === 1){
                setCurr(Curr * 0.57);
            }
            else if(flag2 === 2){
                setCurr(Curr * 0.0068);
            }
            else if(flag2 === 3){
                setCurr(Curr * 0.0063);
            }
            else{
                setCurr(Curr * 1);
            }
        }
        
        
    }
    return (
        <div>
            <div>Dollar-INR Converter</div>
            <div>
                <select name="From" id="From" value={selectedValue1} onChange={handleSelectChange1}>
                    <option value="Dollar" >Dollar</option>
                    <option value="INR">INR</option>
                    <option value="Euro">Euro</option>
                    <option value="Yen">Yen</option>
                </select>
                <input type="text" value={Curr} onChange={HandleFrom} />
            </div>
            <div>
                <select name="To" id="To" value={selectedValue2} onChange={handleSelectChange2}>
                    <option value="INR">INR</option>
                    <option value="Dollar">Dollar</option>
                    <option value="Euro">Euro</option>
                    <option value="Yen">Yen</option>
                </select>
                <input type="text" value={Curr} onChange={HandleTo} />
            </div>
        </div>
    )
}

export default ConverEr
