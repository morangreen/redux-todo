import {ADD, REMOVE} from '../../constants/actionTypes';

export default (state = {items: []}, action) => {
  const {type, data} = action;
  let newState = {};
  const items = [...state.items];

  switch (type) {
    case ADD: {
      newState.items = items.concat(data);

      break;
    }
    case REMOVE: {
      let {id} = data;
      const index = items.findIndex((item) => {
        return item.id === id
      });

      newState.items = items.slice(0, index).concat(items.slice(index + 1, items.length));

      break;
    }
    default: {
      newState = state;
    }
  }

  return newState
}