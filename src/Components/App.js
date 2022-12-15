import React,{useState,} from "react";
import "./App.css"

function App(){
    const [todo , setTodo]=useState("");
    const [list , setList]=useState([]);


// Add task button 
    const onButtonClick=(e)=>{
        e.preventDefault();
        if(todo!==""){
          setList((list)=>{
            const updated=[...list,todo];
            return updated;
                  })    
        }
      
    };
    
    const renderlist=list.map((items, i)=>{
      return (
      <div key={i}>
     <input className="displayTodo" type="text"  defaultValue={items} readOnly="True"/>
      <button className="ui button trash"
       onClick={()=> onRemoveClick(i)}>
      <i class="trash alternate outline icon"></i>
      </button>
      </div>
      )
    });
  // clear input field button 
    const onButton2Click=(e)=>{
      e.preventDefault();
    setTodo("") 
  };
// remove individual tasks button 
  const onRemoveClick=(i)=>{
  const cleaning=list.filter((items,id)=>{
      return i!==id;
      })
      setList(cleaning);
  };
// remove all button 
  const onRemoveAll=()=>{
    setList([])
  };

 
    return (
       <div className="main">
        <h1> To-Do List</h1>
        <div className="mainForm">
        <input className="enterTodo" type="text" value={todo} placeholder="What do you have planned?" onChange={(e)=>setTodo(e.target.value)}/>
        <button type="submit" onClick={onButtonClick} className="ui button">Add Task</button>
        <button type="reset" onClick={onButton2Click} className="ui button">Clear</button>
        </div>
        <h2><i class="clipboard list icon"></i></h2>
       <div>{renderlist}</div>
       <button className="ui button delAll" onClick={onRemoveAll}><i class="trash icon"></i></button>
        </div>
        )
}
export default App;