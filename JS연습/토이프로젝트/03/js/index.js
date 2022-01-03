
const get = (target) => {
  return document.querySelector(target);
}

const API_URL = 'http://localhost:3001/todos';
const _todos = get('.todos_inner');
const _form = get('.form');
const _todoInput = get('.input_text')

const createTodoElement = (item) => {
  const { id, content, completed } = item;
  const _todoItem = document.createElement('div');
  const isChecked = completed ? 'checked' : ''
  _todoItem.classList.add('item')
  _todoItem.dataset.id = id
  _todoItem.innerHTML = `
          <div class="content">
            <input type="checkbox" class="todo_checkbox" ${isChecked}>
            <label>${content}</label>
            <input type="text" value="${content}" class="todo_content">
          </div>
          <div class="btn_wrap">
            <div class="item_buttons content_buttons">
              <button class="todo_edit_button">
                수정
              </button>
              <button class="todo_remove_button">
                삭제
              </button>
            </div>
            <div class="item_buttons edit_buttons">
              <button class="todo_edit_confirm_button">
                수정확인
              </button>
              <button class="todo_edit_cancel_button">
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

const toggleTodo = (e) => {
  if (e.target.className !== 'todo_checkbox') return
  const _item = e.target.closest('.item')
  // console.log(_item)
  const id = _item.dataset.id
  const completed = e.target.checked

  fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({completed})
  })
    .then(getTodos)
    .catch(err => {
      console.log(err)
    })
}

const changeEditMode = (e) => {
  const _item = e.target.closest('.item');
  const _label = _item.querySelector('label');
  const _editInput = _item.querySelector('input[type="text"]');
  const _contentButtons = _item.querySelector('.content_buttons');
  const _editButtons = _item.querySelector('.edit_buttons');

  // 포커스 생기면서 커서가 맨 뒤로 가게 하는 공식 1
  const value = _editInput.value

  if( e.target.className === 'todo_edit_button' ) {
    _label.style.display = 'none'
    _editInput.style.display = 'block'
    _contentButtons.style.display = 'none'
    _editButtons.style.display = 'block'
    
    // 포커스 생기면서 커서가 맨 뒤로 가게 하는 공식 2
    _editInput.focus()
    _editInput.value = ''
    _editInput.value = value
  }

  if( e.target.className === 'todo_edit_cancel_button' ) {
    _label.style.display = 'block'
    _editInput.style.display = 'none'
    _contentButtons.style.display = 'block'
    _editButtons.style.display = 'none'
    _editInput.value = _label.innerText
  }
}

const editTodo = (e) => {
  if( e.target.className !== 'todo_edit_confirm_button' ) return
  const _item = e.target.closest('.item')
  const id = _item.dataset.id
  const _editInput = _item.querySelector('input[type="text"]')
  const content = _editInput.value

  fetch(`${API_URL}/${id}`,{
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({content})
  })
    .then(getTodos)
    .catch(err => console.log(err))
}

const removeTodo = (e) => {
  if ( e.target.className !== 'todo_remove_button' ) return;
  const _item = e.target.closest('.item');
  const id = _item.dataset.id;

  fetch(`${API_URL}/${id}`,{
    method: 'DELETE'
  })
    .then(getTodos)
    .catch(err => console.log(err))
}


const init = () => {
  window.addEventListener('DOMContentLoaded', () => {
    getTodos();
  });
  _form.addEventListener('submit', addTodo);
  _todos.addEventListener('click', toggleTodo);
  _todos.addEventListener('click', changeEditMode);
  _todos.addEventListener('click', editTodo);
  _todos.addEventListener('click', removeTodo);
};

init();
















































































