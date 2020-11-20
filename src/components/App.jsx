import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){

  const [notes,setNotes]=useState([]);

 function addNote(note){
    setNotes(prevNotes=>{
     return [...prevNotes,note];
    })
 }
  function deleteNote(id){
   setNotes(prevNotes=>{
     return prevNotes.filter((item,index)=>{
       return index !==id;
     })
   })
  }

    return (
    <div>

    <Header/>
    <CreateArea onAdd={addNote} />
      {notes.map((item,index) =><Note 
      onDelete={deleteNote}
      title= {item.title }
     content = {item.content} 
     key ={index}
     id={index}/>)}
    <Footer/>
    
    </div>);
    
}


export default App;
