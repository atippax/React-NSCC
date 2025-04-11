import { useState } from "react";
import { Adaptor } from "../interface";

export default function useTestData(): Adaptor {
    const [count, setCount] = useState(0);
    const [name, setname] = useState('');
    const [comment, setComment] = useState('default add value by one');
    return {
        handlers: {
            handlerCommentChange(value: string) {
                console.log('some code on change')
                setComment(value)
            },
            handlerNameChange(value: string) {
                console.log('some code on change')

                setname(value)
            },
            handlerCountChange(value: number) {
                if (value > 40) {
                    alert('value too much!')
                }
                else if (value > 0) {

                    setCount(value)
                }
            },
            handlerButtonClick() {
                setCount(count + 1)
            }
        },
        states: {
            count,
            comment,
            name

        },
        setters: {
            setComment,
            setCount,
            setname
        }
    }
}