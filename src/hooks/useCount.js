import { useState } from 'react'

export const useCount = (initial = 0, maxCount) => {

    const [count, setCount] = useState(initial)

    const decrement = () => {
        count > 0 && setCount (prevCount => prevCount - 1 )
    }

    const increment = () => {
        count < maxCount && setCount (prevCount => prevCount + 1)
    }

    return{
        count,
        decrement,
        increment
    }
}