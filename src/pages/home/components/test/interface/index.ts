import React from "react"
import { BaseAdaptor } from "../../../../../interfaces"

export type Adaptor = BaseAdaptor<state, handler, setter>

interface handler {
    handlerCommentChange: (value: string) => void,
    handlerNameChange: (value: string) => void,
    handlerCountChange: (value: number) => void
    handlerButtonClick: () => void
}
interface state {
    count: number,
    comment: string,
    name: string
}
interface setter {
    setComment: React.Dispatch<React.SetStateAction<string>>,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    setname: React.Dispatch<React.SetStateAction<string>>
}
