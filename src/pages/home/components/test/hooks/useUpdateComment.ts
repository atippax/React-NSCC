import React, { useEffect } from "react";

export default function useUpdateComment({ setValue, value }: {
    setValue: React.Dispatch<React.SetStateAction<string>>,
    value: string
}) {
    useEffect(() => {
        setValue(value)
    }, [])
}