export interface User {
    name: string,
    last: string,
    image: string,
    email: string,
    address: string
}

export interface RequestWrapperPayload {
    method: string,
    url: string,
    params?: any,
}

export interface ReducerAction {
    type: string,
    payload: any
}
