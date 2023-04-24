import './App.css';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';


  const App = () => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState ([]);
  
  
  const addJobList = () => {
    const listEntry =  {
    id: Math.floor(Math.random()* 1000),
    value: inputText,
    finished: false
  };
    setList(listItems => [...listItems, listEntry]);
    setInputText("");
  }

  const updateCheckbox = (id) => {
   const updateList = list.map(listEntry => {
     if(listEntry.id=== id){
       return {...listEntry, finished: !listEntry.finished };
     } else {
       return listEntry;
     };
   })
   setList(updateList)
  };

  const deleteItem = (id) => {
    const updatedList = list.filter(listEntry => listEntry.id !== id);
    setList(updatedList);
  };
  

  
 

  return (
    <div className="wrapper">
      <h1 id="header">To-Do List</h1>

      <input type="text" placeholder="Add to your list" value={inputText} onChange={(event) => setInputText(event.target.value)} />
      <button className="submitBtn" type="button" onClick={addJobList}> Add Task </button>

      <ul>{list.map(listEntry => {
          return (
            <li key={listEntry.id}>
            <input type='checkbox' checked={listEntry.finished} onChange={() => updateCheckbox(listEntry.id)} ></input>
            <span className={listEntry.finished ? "finished" : ""}> {listEntry.value}</span>
          <button  className="binBtn" type="button" onClick={() => deleteItem(listEntry.id)}> <FaTrash /> </button>
            </li>
          );
      })}
      </ul>
    </div>
  );
}

export default App;
