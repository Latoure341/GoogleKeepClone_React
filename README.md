# Google Keep Clone

A React-based note-taking application inspired by Google Keep. Create, edit, organize, and manage your notes with a responsive, modern interface.

## Features

- ** Create & Edit Notes** — Write quick notes with title and content
- ** Dynamic Colors** — Each note gets a random background color automatically
- ** Modal Editing** — Edit notes in a popup modal with save-on-click-outside functionality
- ** Drag & Drop Reordering** — Rearrange notes by dragging and dropping
- ** Delete Notes** — Remove notes you no longer need
- ** Reminders** — Set date and time reminders for notes
- **⏷ Collapsible Sidebar** — Toggle sidebar to maximize note viewing area
- ** Local Storage** — Notes persist across browser sessions
- ** Responsive Design** — Works seamlessly on different screen sizes
- ** Search Ready** — Search functionality ready for implementation

## Tech Stack

- **React** 19.2.4 — UI library
- **Vite** 8.0.0 — Fast build tool and dev server
- **@dnd-kit** — Drag and drop library
- **react-masonry-css** — Masonry layout for notes
- **cuid** — Unique ID generation
- **ESLint** — Code linting

## Project Structure

```
src/
├── App.jsx                 # Main app component with state management
├── App.css                 # Global styles
├── main.jsx                # Entry point
├── components/
│   ├── navbar.jsx          # Top navigation bar
│   ├── sidebar.jsx         # Collapsible sidebar navigation
│   ├── form.jsx            # Note creation/editing form
│   ├── modal.jsx           # Edit modal wrapper
│   ├── notes.jsx           # Notes container with drag-drop
│   ├── note.jsx            # Individual note component
│   ├── EmptyNotesList.jsx  # Empty state UI
│   └── component_styles/   # Component-specific CSS files
├── index.css               # Global styles
└── vite.config.js          # Vite configuration
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd GoogleKeepClone_React
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173` in your browser.

## Usage

1. **Create a Note** — Click the input field at the top and type your note title and content
2. **Edit a Note** — Click on any note to open the edit modal, make changes and click outside to save
3. **Delete a Note** — Click the delete icon on any note to remove it
4. **Reorder Notes** — Drag notes to rearrange them in your preferred order
5. **Set a Reminder** — Click the bell icon on a note to set a date/time reminder
6. **Toggle Sidebar** — Click the menu icon in the navbar to expand/collapse the sidebar

## Available Scripts

- `npm run dev` — Start development server with HMR
- `npm run build` — Build for production
- `npm run lint` — Run ESLint code checks
- `npm run preview` — Preview production build

## Key Implementation Details

- **State Management** — Uses React hooks (useState, useCallback, useImperativeHandle)
- **Local Storage** — Notes are automatically saved to browser localStorage with key `keep_clone_notes`
- **Click Outside to Save** — Modal uses ref forwarding to save edits when clicking outside
- **Responsive Layout** — Form and layout adjust based on sidebar state and screen width
- **Drag & Drop** — Integrated @dnd-kit for smooth note reordering

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Search functionality
- Note categories/labels
- Note sharing
- Export notes to PDF
- Dark mode
- Rich text editing

## License

This project is for educational use.

