import { useEffect } from "react";

export default function useIncrementCount({ setCount }: {
    setCount: React.Dispatch<React.SetStateAction<number>>
}) {
    useEffect(() => {
        const random = parseInt(`${Math.random() * 10}`)
        setCount(random)
    }, [])
}