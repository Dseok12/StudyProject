


const get = (target) => {
  return document.querySelector(target);
}


const createTodoElement = (item) => {
  const { id, content } = item;
  const _todoItem = document.createElement('div');
  _todoItem.innerHTML = `
          <div class="content">
            <input type="checkbox" class="todo_checkbox">
            <label></label>
            <input type="text" value="" class="todo_content">
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



const init = () => {
  window.addEventListener('DOMContentLoaded', () => {})
}

init();
















































































