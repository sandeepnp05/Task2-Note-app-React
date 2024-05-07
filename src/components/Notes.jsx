import React, { useState,useEffect } from 'react';
import CreateNote from './CreateNote';
import NoteList from './NoteList';
import axios from 'axios';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:3001');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };
  useEffect(() => {
    fetchNotes();
  }, [])

  const handleDeleteNote = async () => {
    await fetchNotes(); 
  };

  const handleCreateNote = async () =>{
    await fetchNotes()
  }
  return (
    <>
    <div className='bg-slate-950 p-5 '>
    <header className="text-white text-center">
        <h1 className="text-3xl font-bold text-left">Notes</h1>
      </header>
    </div>
    <div className="bg-teal-800 min-h-screen py-8 px-4">
      

      <CreateNote addNote={handleCreateNote} />
      <NoteList notes={notes} onDelete={handleDeleteNote}/>

   
    </div>
    </>
  );
};

export default Notes;