import React, { useEffect } from 'react'
import { useState } from 'react';

const Note = () => {
   const [noteTitle, setNoteTitle] = useState("");
    const [notes, setNotes] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editableNote, setEditableNote] = useState(null);

    function getData() {
        fetch('http://localhost:4000/notes')
        .then(res => res.json())
        .then(data => setNotes(data))
    }

    useEffect(() => {
        getData();
    }, [])

    const changeTitleHandler = (e) => {
      setNoteTitle(n => e.target.value);
    }

    const submitHandler = (e) => {
          e.preventDefault();
          if(noteTitle.trim() === "") {
            return alert("Please provide a valid title!");
          }
          editMode? updateHandler() : createHandler();
    }

    const createHandler = () => {
      const newNote = {
            id: Date.now() + "",
            title: noteTitle
          }
          fetch('http://localhost:4000/notes', {
            method: "POST",
            body: JSON.stringify(newNote),
            headers: {
                'Content-type': 'application/json'
            }
          }).then(() => {
            getData();
          })
          

        //   setNotes([newNote, ...notes]);
          setNoteTitle("");
    }

    const removeHandler = (noteId) => {
      fetch(`http://localhost:4000/notes/${noteId}`, {
        method: "DELETE"
      }).then(() => {
        getData();
      })
    }

    const editHandler = (note) => {
      setEditMode(true);
      setEditableNote(note);
      setNoteTitle(note.title);
    }

    const updateHandler = () => {
        const updatedNote = {...editableNote, title: noteTitle} 
      fetch(`http://localhost:4000/notes/${editableNote.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedNote),
        headers: {
            'Content-type': "application/json"
        }
      }).then(() => {
        getData();
        setNoteTitle("");
      setEditMode(false);
      setEditableNote(null);
      })
      
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={noteTitle} onChange={(e) => changeTitleHandler(e)}/>
        <button type='submit'>{editMode? "Update Note":"Add Note"}</button>
      </form>
      <div className="note-list">
        <h2>All Notes</h2>
        <ul>
          {
            notes.map(note => {
              return (
                <>
                <li key={note.id}>
                <span>{note.title}</span>
                <button onClick={() => editHandler(note)}>Edit</button>
                <button onClick={() => removeHandler(note.id)}>Delete</button>
                </li>
                <br />
                </>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Note
