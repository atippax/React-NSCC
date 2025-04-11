export interface BaseAdaptor<state, handler, setter> {
    states: state,
    setters: setter,
    handlers: handler
}