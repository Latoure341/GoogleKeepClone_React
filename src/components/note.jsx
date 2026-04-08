import React, { useMemo, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Note = (props) => {
  const { note, deleteNote, toggleModal, setSelectedNote, updateReminder } = props;
  const [isHover, setHover] = useState(false);
  const [isReminderPickerOpen, setIsReminderPickerOpen] = useState(false);
  const [reminderInput, setReminderInput] = useState(note.reminder || "");

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: note.id });
    const noteColor = ()=>{
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
  }

  const noteStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.75 : 1,
    backgroundColor: noteColor(),
  };

  const reminderText = useMemo(() => {
    if (!note.reminder) return "";
    const reminderDate = new Date(note.reminder);
    if (Number.isNaN(reminderDate.getTime())) return "";
    return reminderDate.toLocaleString([], {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }, [note.reminder]);

  //Functions
  const handleNoteClick = (event) => {
    const spanTarget = event.target.closest("span");
    const pickerTarget = event.target.closest(".reminder-picker");
    event.preventDefault();
    if (spanTarget && spanTarget.classList.contains("archive")) return;
    if (spanTarget && spanTarget.classList.contains("reminder-trigger")) return;
    if (pickerTarget) return;
    toggleModal();
    setSelectedNote(note);
  };
  const handlerMouserOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  const handleArchive = () => {
    deleteNote(note.id);
  };
  const toggleReminderPicker = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setReminderInput(note.reminder || "");
    setIsReminderPickerOpen((prevState) => !prevState);
  };

  const handleReminderChange = (event) => {
    setReminderInput(event.target.value);
  };

  const handleReminderSave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    updateReminder(note.id, reminderInput || null);
    setIsReminderPickerOpen(false);
  };

  const handleReminderClear = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setReminderInput("");
    updateReminder(note.id, null);
    setIsReminderPickerOpen(false);
  };


  return (
    <div
      className="note"
      ref={setNodeRef}
      style={noteStyle}
      id={note.id}
      onMouseOver={handlerMouserOver}
      onMouseOut={handleMouseOut}
      onClick={handleNoteClick}
      {...attributes}
      {...listeners}
    >
      {isHover && (
        <span
          className="material-symbols-outlined check-circle"
          id="check-circle"
        >
          {" "}
          check_circle
        </span>
      )}
      <div className="title">{note.title}</div>
      <div className="text">{note.text}</div>
      {note.reminder && (
        <div className="note-reminder">
          <span className="material-symbols-outlined small-icon">schedule</span>
          <span>{reminderText || "Reminder set"}</span>
        </div>
      )}
      <div className="note-footer" style={{visibility: isHover ? "visible" : "hidden"}}>
        <div className="tooltip">
          <span
            className="material-symbols-outlined hover small-icon reminder-trigger"
            onClick={toggleReminderPicker}
          >
            add_alert
          </span>
          <span className="tooltip-text">Remind me</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            person_add
          </span>
          <span className="tooltip-text">Collaborator</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            palette
          </span>
          <span className="tooltip-text">Change Color</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            image
          </span>
          <span className="tooltip-text">Add Image</span>
        </div>
        <div className="tooltip">
          <span
            className="material-symbols-outlined hover small-icon archive"
            onClick={handleArchive}
          >
            archive
          </span>
          <span className="tooltip-text archive">Archive</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            more_vert
          </span>
          <span className="tooltip-text">More</span>
        </div>
      </div>
      {isReminderPickerOpen && (
        <div className="reminder-picker" onClick={(event) => event.stopPropagation()}>
          <input type="datetime-local" value={reminderInput} onChange={handleReminderChange} />
          <div className="reminder-actions">
            <button onClick={handleReminderSave}>Save</button>
            <button onClick={handleReminderClear}>Clear</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
