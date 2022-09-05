import React, {useState} from "react";

export function Botones() {
    const [count, setCount] = useState(0)
    const [countColor, setCountColor] = useState({
        marginLeft: 300,
        marginRight: 300,
        fontSize: 40,
        background: "red",
    })
    const addCount = () => {
        setCount(count+1)
        setCountColor({...countColor, background: "white"})
    }
    const substracCount = () => {
        setCount(count-2)
        setCountColor({...countColor, background: "white"})
    }
    const divideCount = () => {
        backgroundCount(count % 3)
        setCount(count/3)
    }
    const resetCount = () => {
        setCount(0)
        setCountColor({...countColor, background: "red"})
    }
    const backgroundCount = (modulo) => {
        if(modulo === 0) setCountColor({...countColor, background: "red"})
        else if(modulo === 1) setCountColor({...countColor, background: "green"})
        else setCountColor({...countColor, background: "blue"})
    }

    let center = {textAlign: "center", paddingTop: 40} //css

    return(<div style={center}>
            <button onClick={addCount}>Add</button>
            <button onClick={substracCount}>Substrac</button>
            <button onClick={divideCount}>Divide</button>
            <button onClick={resetCount}>Reset</button>

            <p style={countColor}>{count}</p>

        </div>
    )
}