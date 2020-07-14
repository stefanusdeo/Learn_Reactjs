const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 17
}
// reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_AGE":
            return {
                ...state, //copy seluruh state
                age: state.age + 1
            }
        case "ADD_VALUE":
            return {
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state;

    }
}

//store
const store = createStore(rootReducer);
console.log(store.getState());

//subscribetion (notifikasi perubahan)
store.subscribe(() => {
    console.log("state change : ", store.getState())
})

//dispatching action
store.dispatch({ type: "ADD_AGE" })
store.dispatch({ type: "ADD_VALUE", newValue: 2 })
console.log(store.getState())
