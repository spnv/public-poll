export function web3Reducer(state = {}, action) {
    switch (action.type) {
        case "GET_WEB3":
            return {
                ...state,
                instance: action.payload.web3
            }
            break;
        case "GET_WEB3_REJECTED":
            return {
                ...state,
                instance: action.payload
            }
        default:
            break;
    }
    return state
}