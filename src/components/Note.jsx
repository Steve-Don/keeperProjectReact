//<h1> for a title and a <p> for the content.

import React from "react";

function Note(props){
    return (
        <div className = "note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default Note;