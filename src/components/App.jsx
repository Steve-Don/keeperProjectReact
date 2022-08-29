import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "./notes";

function createNotes(notes){
    return (
    <Note
        key = {notes.key}
        title = {notes.title}
        content = {notes.content}
    />
    )
}

function App(){
    return(
        <div>
            <Header />
            <Footer />
            {notes.map(createNotes)}
        </div>
    )
}

export default App;