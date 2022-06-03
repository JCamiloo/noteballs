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
    addNote(newNoteContent) {
      const note = {
        id: new Date().getTime(),
        content: newNoteContent
      }

      this.notes.unshift(note)
    }
  }
})
