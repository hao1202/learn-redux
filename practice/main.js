import { createStore } from 'https://cdn.skypack.dev/redux';

// dom event 
const deposit = document.querySelector('#deposit');
const withdraw = document.querySelector('#withdraw');

// listen event
deposit.onclick = () => {
    store.dispatch(actionDeposit(10));
}

withdraw.onclick = () => {
    store.dispatch(actionWithdraw(10));
}

// actions
function actionDeposit(payload) {
    return {
        type: "DEPOSIT",
        payload
    }
}

function actionWithdraw(payload) {
    return {
        type: "WITHDRAW",
        payload
    }
}

// initialize state
const initState = {
    money: 0
}

// reducer
function bankReducer(state = initState, action) {
    switch (action.type) {
        case "DEPOSIT":
            return {
                money: state.money + action.payload
            }
        case "WITHDRAW":
            return {
                money: state.money - action.payload
            }
        default:
            return state;
    }
}

// store
const store = createStore(bankReducer);

// render 
store.subscribe(() => {
    render();
});

function render() {
    const output = document.querySelector('#output');
    output.innerText = store.getState().money;
}

render();