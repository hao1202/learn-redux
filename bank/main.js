import { createStore } from 'https://cdn.skypack.dev/redux';


// reducer
function bankReducer(state = { money: 0 }, action) {
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

const store = createStore(bankReducer);

// Actions
const actionDeposit = payload => {
    return {
        type: "DEPOSIT",
        payload
    }
}

const actionWithdraw = payload => {
    return {
        type: "WITHDRAW",
        payload
    }
}

// dom event
const deposit = document.querySelector('#deposit');
const withdraw = document.querySelector('#withdraw');

// handle event
deposit.onclick = () => {
    store.dispatch(actionDeposit(10));
}
withdraw.onclick = () => {
    store.dispatch(actionWithdraw(10));
}

// render UI
store.subscribe(() => {
    render();
});
// render
const render = () => {
    const output = document.querySelector('#output');
    output.innerText = store.getState().money;
}
render();



