import {ADD, REMOVE} from '../../constants/actionTypes';

let initialId = 0;

export const add = (text) => {
  return {
    type: ADD,
    data: {
      text,
      id: (++initialId).toString()
    }
  };
};

export const remove = (id) => {
  return {
    type: REMOVE,
    data: {
      id
    }
  };
};