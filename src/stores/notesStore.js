import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notesStore', {
  state: () => {
    return {
      notes: [
        {
          id: 1,
          content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim nesciunt quam laborum quisquam fugiat labore"
        },
        {
          id: 2,
          content: "Shorter note"
        }
      ]
    }
  },
  actions: {
    addNote(noteContent) {
      const note = {
        id: new Date().getTime(),
        content: noteContent
      }

      this.notes.unshift(note)
    },
    deleteNote(id) {
      this.notes = this.notes.filter(note => note.id !== id)
    }
  }
})
