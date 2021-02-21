import React, { useState } from 'react'

function Increment({ setCounter, counter }) {
    function increment() {
        setCounter(counter + 1)
    }
    return <button onClick={increment}>increment</button>
}

function Counter() {
    const [counter, setCounter] = useState(0)

    const reset = () => {
        setCounter(0)
    }

    const double = () => {
        setCounter(counter * 2)
    }

    return (
        <div>
            <h1>Count: {counter}</h1>
            <div>
                <Increment counter={counter} setCounter={setCounter} />
                <button onClick={reset}>reset</button>
                <button onClick={double}>double</button>
            </div>
        </div>
    )
}

export default Counter
