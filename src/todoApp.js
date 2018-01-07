import './styles.scss';
import store from './data/store';
import tmplTodo from './partials/todoList.dot';
import {add, remove} from './data/actionCreators';

const onAddTodoClick = (newItem) => {
  store.dispatch(add(newItem.value));

  newItem.value = '';
};

export const run = () => {
  const addTodoBtn = document.getElementsByClassName('fn-add-todo')[0];
  const newItem = document.getElementById('new-item');

  newItem.focus();

  document.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
      event.target.id === 'add-todo-btn' && event.preventDefault();

      onAddTodoClick(newItem);
    }
  });

  addTodoBtn.addEventListener('click', (event) => {
    onAddTodoClick(newItem);
  });

  store.subscribe(() => {
    const items = store.getState().todo.items;

    document.getElementById('todo-items').innerHTML = tmplTodo({items});
    const removeTodoBtns = document.getElementsByClassName('fn-remove-todo');

    if (removeTodoBtns) {
      for (let i = 0; i < removeTodoBtns.length; i++) {
        removeTodoBtns[i].addEventListener('click', (event) => {
          store.dispatch(remove(event.currentTarget.dataset.id));
        });
      }
    }
  });
};
