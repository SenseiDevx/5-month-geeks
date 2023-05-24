const initialState = {
    count: 0,
    color: 'black'
}

export function reducer(state = initialState, action){
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
                color: state.count >= 1 ? 'green' : 'black',
            }
        case 'DECREMENT':
            return {
                count: state.count > 0 ? state.count - 1 : 0
            }
        default:
            return state;
    }
}
