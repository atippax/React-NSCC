import { useCallback } from "react";
import { Adaptor } from "../interface";
import useBaseAdaptor from "./useBaseAdaptor";
import useUpdateComment from "../hooks/useUpdateComment";

export default function useAddOne(): Adaptor {
    const state = useBaseAdaptor()
    useUpdateComment({
        setValue: state.setters.setComment,
        value: 'add by ten'
    })
    state.handlers.handlerButtonClick = useCallback(() => {
        state.setters.setCount(state.states.count + 10);
    }, [state.states.count]);
    return state
}