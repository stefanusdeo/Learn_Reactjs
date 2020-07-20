import ActionType from './globalActionType';

const initialState = {
    totalOrder: 0
}

//reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === ActionType.ADD_ORDER) {
        return {
            ...state,
            totalOrder: state.totalOrder + 1
        }
    } if (action.type === ActionType.MINUS_ORDER) {
        let totalOrder = 0
        if (state.totalOrder > 0) {
            totalOrder = state.totalOrder - 1
        }
        return {
            ...state,
            totalOrder: totalOrder
        }
    }
    return state;
}

export default rootReducer;