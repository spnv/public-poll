export function simpleContract(state = {}, action) {
    switch (action.type) {
        case "UPDATE_SC":
            return { ...state,
                value: action.payload
            }
            break;
        default:
            break;
    }
    return state
}