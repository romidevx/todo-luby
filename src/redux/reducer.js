import { createStore } from "redux";

const initialState = {
  todos: []
};



const reducer = (state = initialState, action) => {

  switch (action.type) {

    case "LOAD_STORAGE": {
      return {
            ...state, 
            todos: action.payload }
    }

    case "ADD_TODO": {
      return {
            ...state, 
            todos: action.payload }
    }

    case "DELETE_TODO": {
      return {
            ...state,
            todos: action.payload 
      };
     
    }

    case "ORDER_TODOS": {
      return {
            ...state,
            todos: action.payload 
      };
     
    }
    
    default: {
      return state;
    }
  }

};

const store = createStore(reducer, initialState);

store.subscribe(() => console.log(store.getState()))

export default store;
