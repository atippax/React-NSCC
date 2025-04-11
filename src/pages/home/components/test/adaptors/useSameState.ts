import { useCallback } from "react";
import { Adaptor } from "../interface";

export default function useSameState(state: Adaptor): Adaptor {
    return {
        ...state,
        handlers: {
            ...state.handlers,
            handlerButtonClick: useCallback(() => {
                state.setters.setCount(parseInt(`${Math.random() * 10}`));
            }, [state.states.count])
        }
    }

}