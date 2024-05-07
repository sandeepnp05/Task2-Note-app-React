import React from 'react';
import NoteCard from './NoteCard';

const NoteList = ({ notes,onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
      {notes.map((note, index) => (
        <NoteCard key={index} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NoteList;