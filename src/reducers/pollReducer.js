export function pollReducer(state = {}, action) {
    switch (action.type) {
        case "TEST_POLL":
            return { ...state,
                test: action.payload
            }
            break;
        default:
            break;
    }
    return state
}