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

function actionDelete(payload) {
    return {
        type: "DELETE",
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
        case "DELETE":
            const newArr = [...state.listTodo].filter((data, index) => {
                return index != action.payload;
            })
            return {
                ...state,
                listTodo: [...newArr]
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
    danhSach.innerHTML = store.getState().listTodo.reduce((accumulator, currentValue, index) => {
        return accumulator + `<li>${currentValue} <button class="xoa">Xoa</button></li>`;
    }, "");
    const xoaButtons = document.querySelectorAll('.xoa');
    xoaButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            store.dispatch(actionDelete(index));
        });
    });
};


render();