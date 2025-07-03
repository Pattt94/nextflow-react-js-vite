// src/CounterComponent.jsx

import React, { useState } from 'react'

export default function CounterComponent() {
    
    console.log("render..")

    const [counter, setCounter] = useState(1)

    // ประกาศตัวแปร แสดงตัวนับ
    let count = 0

    // ประกาศ function ที่กดแล้ว จะเพิ่มตัวนับ
    const increase = () => {
        setCounter(counter + 1)
        console.log(count)
    }

    return (
        <div>
            <h2>Counter:</h2>
            {/* นำตัวแปรมาแสดงใน JSX */}
            <p>total: {counter}</p>

            {/* นำ function มาใช้กับ event ของ button */}
            <button onClick={increase}>add 1</button>
        </div>
    )
}