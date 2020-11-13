import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../note"
function App(){
    return <div>

    <Header/>
      {notes.map(item =><Note title= {item.title } content = {item.content} key ={item.key}/>)}
    <Footer/>
    
    </div>;
    
}


export default App;