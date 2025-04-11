import { useCallback } from "react";
import { Adaptor } from "../interface";
import useBaseAdaptor from "./useBaseAdaptor";
import useUpdateComment from "../hooks/useUpdateComment";

export default function useMultiply(): Adaptor {
    const state = useBaseAdaptor()
    useUpdateComment({
        setValue: state.setters.setComment,
        value: 'add with multiply by 2'
    })
    return {
        ...state,
        handlers: {
            ...state.handlers,
            handlerButtonClick: useCallback(() => {
                state.setters.setCount(state.states.count * 2);
            }, [state.states.count])
        }
    }
}