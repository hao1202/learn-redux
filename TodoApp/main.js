import { createStore } from 'https://cdn.skypack.dev/redux';

// Dom
const input = document.querySelector('#input');
const them = document.querySelector('#them');
const danhSach = document.querySelector('#danh-sach');

// Dom event
them.onclick = () => {
    const valueInput = input.value.trim();
    if (valueInput === '') {
        alert("chua nhap cong viec")
    } else {
        store.dispatch(actionAdd(valueInput));
        input.value = "";
    }
}

// actions
function actionAdd(payload) {
    return {
        type: "ADD",
        payload
    }
}
// reducer
const initState = {
    listTodo: []
}

function todoReducer(state = initState, action) {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                listTodo: [...state.listTodo, action.payload]
            }
        default:
            return state;
    }
}
// store
const store = createStore(todoReducer);
store.subscribe(() => {
    render();
});
function render() {
    danhSach.innerHTML = store.getState().listTodo.reduce((accumulator, currentValue) => {
        return accumulator + `<li>${currentValue}</li>`;
    }, "");
};


render();