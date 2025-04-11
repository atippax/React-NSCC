import { useCallback } from "react";
import { Adaptor } from "../interface";

export default function useSameSomeState(state: Adaptor): Adaptor {
    const selfSomeState = {
        ...state,
        states: {
            ...state.states, comment: 'custom some state (comment State)'
        },
        handlers: {
            ...state.handlers,
            handlerButtonClick: useCallback(() => {
                state.setters.setCount(parseInt(`${Math.random() * 10}`));
            }, [state.states.count])
        }
    } as Adaptor


    return selfSomeState

}