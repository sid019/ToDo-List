import React, { useState } from 'react';
import List from './List';
import './App.css';

const App = () => {
  const[inputList,setInputList] = useState("");
  const[list,setList] = useState([]);

  const inputEvent = (event) => {
      setInputList(event.target.value);
  };
  const List_array = () => {
    setList((oldValue) => {
      return [...oldValue,inputList];
    });
    setInputList("");
  };
  const deleteItems = ( id ) => {
    setList((oldValue) => {
      return oldValue.filter((arrElem , index) => {
        return index !== id;
      })
    });
  }
  return(
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>toDo list</h1>
          <div className='items'>
          <div className='box'>
            <input type = "text" placeholder="Add a Items" onChange = {inputEvent} name = "list" value = {inputList}/>
            <button onClick={List_array}>+</button>
            </div>
            <ol>
                {list.map((itemVal , index) => {
                  return <List 
                          id = {index}
                          key = {index}
                          text = {itemVal}
                          onSelect = {deleteItems}
                          />;
                })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;