import { createStore } from 'https://cdn.skypack.dev/redux';

const initialState = {
    value: 0
};

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case "incremented":
            return { value: state.value + action.payload };
        case "decremented":
            return { value: state.value - action.payload };
        default:
            return state;
    }
}


function actionIncremented(payload) {
    return {
        type: 'incremented',
        payload
    }
}

function actionDecremented(payload) {
    return {
        type: 'decremented',
        payload
    }

}
let store = createStore(counterReducer);

// Dom Events
const incremented = document.querySelector('#incremented');
const decremented = document.querySelector('#decremented');

// Events handle
incremented.onclick = function () {
    store.dispatch(actionIncremented(1));
}

decremented.onclick = function () {
    store.dispatch(actionDecremented(1));
}
// render
function render() {
    const output = document.querySelector('#input');
    output.innerText = store.getState().value;
}

// Listener
store.subscribe(() => {
    render();
})
render();

