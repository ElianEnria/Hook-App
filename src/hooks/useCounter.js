import { useState } from "react"

// use identificador para Hooks
export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        setCounter(counter + value)
    }
    const subtract = (value = 1) => {
        if (counter > 1) {
            setCounter(counter - value);
        }
    }
    const reset = () => {
        setCounter(initialValue)
    }


    return {
        counter,
        increment,
        subtract,
        reset
    }
}