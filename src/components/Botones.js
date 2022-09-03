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
    }
    const substractCount = () => {
        setCount(count-2)
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
    let button = {margin: 4,
        backgroundColor: "black",
        color: "white",
        padding: 8,
        borderRadius: 8,
        textTransform: "uppercase",
        paddingLeft: 32,
        paddingRight: 32}

    return(<div style={center}>
            <button style={button} onClick={addCount}>Add</button>
            <button style={button} onClick={substractCount}>Substract</button>
            <button style={button} onClick={divideCount}>Divide</button>
            <button style={button} onClick={resetCount}>Reset</button>

            <p style={countColor}>{count}</p>

        </div>
    )
}