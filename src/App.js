import React,{useEffect} from "react";
import "./App.css";

//UTILITIES
import Moment from 'react-moment';
// REDUX
import { useSelector,useDispatch } from "react-redux";
// COMPONENTS
import Form from "./components/Form";
import Header from "./components/Header";


const App = () => {

  //STORE DATA -> redux/reducer.js
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();


  useEffect( () => {
    localStorage.getItem('todos',JSON.stringify(todos))
    dispatch({
      type:'ADD_TODO',
      payload:JSON.parse(localStorage.getItem('todos'))
    });
  },[]);

  

  // DELETE TODO
  const deleteTodo = (item) => {
    const itemsInStorage = JSON.parse(localStorage.getItem('todos'));
    const filteredItems = itemsInStorage.filter(todo => todo.name !== item);
    localStorage.setItem('todos', JSON.stringify(filteredItems));

    dispatch({
      type:'DELETE_TODO',
      payload: JSON.parse(localStorage.getItem('todos'))
    });
    
  }


  return (
    <div className="app">
      
      <Header todos={todos }/>

      <Form />

      { !todos

        ? <h4>Ooops no todos found..</h4> 

        : todos.map((todo,index) => (

          <h5 className='todo' key={index}>

            <span>
              <b>{todo.name}</b>
              
              <small style={{ color: "#b4ada3", fontSize: "10px" }}>
                <br />

                {/* show how long ago the todo was added*/}
                <Moment fromNow>{todo.data}</Moment> 
                
              </small>
            </span>

            <span className="x-delete"  onClick={() => deleteTodo(todo.name)}>Delete</span>
          </h5>
        ))}
    </div>
  );
}


export default App;
