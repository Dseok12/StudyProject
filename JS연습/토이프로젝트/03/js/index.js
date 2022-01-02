
const get = (target) => {
  return document.querySelector(target);
}

const API_URL = 'http://localhost:3001/todos';
const _todos = get('.todos_inner');
const _form = get('.form');
const _todoInput = get('.input_text')

const createTodoElement = (item) => {
  const { id, content } = item;
  const _todoItem = document.createElement('div');
  _todoItem.classList.add('item')
  _todoItem.dataset.id = id
  _todoItem.innerHTML = `
          <div class="content">
            <input type="checkbox" class="todo_checkbox">
            <label>${content}</label>
            <input type="text" value="${content}" class="todo_content">
          </div>
          <div class="btn_wrap">
            <div class="item_buttons content_buttons">
              <button class="todo_edit_button btn">
                수정
              </button>
              <button class="todo_remove_button btn">
                삭제
              </button>
            </div>
            <div class="item_buttons edit_buttons">
              <button class="todo_edit_confirm_button btn">
                수정확인
              </button>
              <button class="todo_edit_cancel_button btn">
                취소
              </button>
            </div>
          </div>
  `
  return _todoItem
}


const renderAllTodos = (todos) => {
  _todos.innerHTML = ''
  todos.forEach(item => {
    const todoElement = createTodoElement(item)
    _todos.appendChild(todoElement)
  })
}

const getTodos = () => {
  fetch(API_URL)
    .then(res => res.json())
    .then(todos => renderAllTodos(todos))
    .catch((error) => {
      console.error(error)
    })
}

const addTodo = (e) => {
  e.preventDefault();
  // console.log(_todoInput.value)
  const todo = {
    content: _todoInput.value,
    completed: false
  }
  fetch(API_URL,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
    .then(getTodos)
    .then(() => {
      _todoInput.value = ''
      _todoInput.focus()
    })
    .catch(err => console.error(err))
}


const init = () => {
  window.addEventListener('DOMContentLoaded', () => {
    getTodos();
  });
  _form.addEventListener('submit', addTodo)
};

init();
















































































