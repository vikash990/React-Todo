import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length>0 ? todos.map( tod => {
    return (
       <div  key={tod.id}>
         <span className='blue-text' onClick={() => {deleteTodo(tod.id)}}>{tod.item}</span>
       </div>
    )
  }) : (
    <p className='center red-text'> You don't have any Todos left </p>
  )

  return(
    <div className='todos collection'>
      {todoList}
    </div>
  )
}

export default Todos;
