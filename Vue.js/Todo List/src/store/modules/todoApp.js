const storage = {
    fetch(){
        const arr = [];
       if (localStorage.length > 0) {
         for (let i = 0; i < localStorage.length; i++) {
           if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
               arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
           }
         }
       }
       return arr;
    },
};

const state = {
    todoItems: storage.fetch()
};

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    }
};

const mutations = {
    addOneItem(state, todoItem) {
        const obj ={complete: false,item: todoItem};
        // 저장하는 로직
        // localStorage.setItem(this.newTodoItem, obj);
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },

    removeOneItem(state, payload) {
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },

    toggleOneItem(state, payload) {
        // todoItem.completed = !todoItem.completed;
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        // 로컬 스토리지 데이터 갱신
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        // console.log(todoItem, index);
    },

    clearAllItems(state) {
        localStorage.clear();
        state.todoItems = [];
    }
};

export default {
    state,
    getters,
    mutations
}