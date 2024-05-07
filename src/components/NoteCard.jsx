import React from 'react'
import { TrashIcon } from '@heroicons/react/24/outline'
import axios from 'axios'

const NoteCard = ({ note, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/${note.id}`)
      onDelete()
    } catch (error) {
      console.error('Error deleting note:', error)
    }
  }

  return (
    <div className='bg-yellow-100 text-black p-4 rounded-md flex items-start justify-between flex-col'>
      <div>
        <p className='text-lg'>{note.title}</p>
        <p className='text-sm'>{note.contents}</p>
        <p className='text-xs mt-2'>{note.created}</p>
      </div>
      <button
        onClick={handleDelete}
        className='focus:outline-none mt-auto self-start relative left-60'
      >
        <TrashIcon className='h-5 w-5 text-gray-500 hover:text-red-500' />
      </button>
    </div>
  )
}

export default NoteCard
