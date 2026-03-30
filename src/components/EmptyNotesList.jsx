import React from 'react'
import "./component_styles/EmptyNotesList.css"

const EmptyNotesList = () => {
  return (
    <div className='empty-list-container'>
    <span className="material-symbols-outlined empty-list-icon">lightbulb</span>
    <p>Notes that you add appear here.</p>
    </div>
  )
}

export default EmptyNotesList
