import React,{useState} from 'react';
import {useDispatch} from 'react-redux';

const Form = () => {

  // LOCAL STATE
  const [inputValue,setInputValue] = useState();
  const [error,setError] = useState();

  //REDUX
  const dispatch = useDispatch();

  // ADD TODO
  const addTodo = () => {

    if(!inputValue || inputValue.length < 5){
       setError('Todo must be at least 5 characters long..');
      return;
    }
      
    if (localStorage.getItem('todos') === null){
      const tempTodos = [];
      const tempStorage = [...tempTodos, { name:inputValue, data: new Date() }];
      localStorage.setItem('todos',JSON.stringify(tempStorage));

      dispatch({
        type:'ADD_TODO',
        payload:JSON.parse(localStorage.getItem('todos'))
      });

  }else{
    
      const tempTodos = JSON.parse(localStorage.getItem('todos'));
      const tempStorage = [...tempTodos, { name:inputValue, data: new Date() }];
      localStorage.setItem('todos',JSON.stringify(tempStorage));

      dispatch({
        type:'ADD_TODO',
        payload:JSON.parse(localStorage.getItem('todos'))
      });

  }

    setInputValue('');
  }

  // ORDER TODOS
  const orderTodos = () => {

    const inStorage = JSON.parse(localStorage.getItem('todos'));

    const filterTodos = inStorage.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })

    localStorage.setItem('todos',JSON.stringify(filterTodos));

    dispatch({
      type:'ORDER_TODOS',
      payload:JSON.parse(localStorage.getItem('todos'))
    });
  }


  return(
    <div className='form-wrapper'>
    
        <div className="form">

          <input value={inputValue} placeholder='Enter new todo..' onChange={e => { 
            setInputValue(e.target.value);
            setError('');
           }} />

          <button onClick={addTodo}>Add todo</button>
        </div>

        {/*DISPLAY VALIDATION ERROR */}
        {error ? <p style={{color:'red',fontSize:'11px'}}>{error}</p> : ''}

        <button onClick={orderTodos} className='btn-orderTodos'>Order Todos</button>

    </div>
  );
}

export default Form;