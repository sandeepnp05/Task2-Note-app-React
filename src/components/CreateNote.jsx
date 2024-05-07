import React, { useState } from 'react';
import axios from 'axios';

const CreateNote = ({ addNote }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [showNoteInput, setShowNoteInput] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (noteTitle.trim() && noteText.trim()) {
      try {
        const response = await axios.post('http://localhost:3001', {
          title: noteTitle,
          content: noteText,
        });
        addNote()
        if (response.status === 200 || response.status === 201) {
          setNoteTitle('');
          setNoteText('');
          setShowNoteInput(false);
        } else {
          console.error('Failed to create note');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleTitleChange = (e) => {
    setNoteTitle(e.target.value);
    setShowNoteInput(true); 
  };

  const handleTextChange = (e) => {
    setNoteText(e.target.value);
    setShowNoteInput(true); 
  };

  return (
    <div className="max-w-md mx-auto mb-8">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={showNoteInput ? "Title..." : "Take a note..."}
          value={noteTitle}
          onFocus={handleTitleChange}
          onChange={handleTitleChange}
          className="w-full py-2 px-4 text-black rounded-md bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
        />
        {showNoteInput && (
          <>
            <input
              id="note-text"
              type="text"
              placeholder="Take a note..."
              value={noteText}
              onChange={handleTextChange}
              className="w-full py-2 px-4 text-black rounded-md bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Note
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default CreateNote;
