import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notesStore', {
  state: () => {
    return {
      notes: [
        {
          id: '1',
          content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim nesciunt quam laborum quisquam fugiat labore"
        },
        {
          id: '2',
          content: "Shorter note"
        }
      ]
    }
  },
  actions: {
    addNote(noteContent) {
      const note = {
        id: new Date().getTime().toString(),
        content: noteContent
      }
      this.notes.unshift(note)
    },
    deleteNote(id) {
      this.notes = this.notes.filter(note => note.id !== id)
    },
    updateNote(id, content) {
      const index = this.notes.findIndex(note => note.id === id)
      this.notes[index].content = content;
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => state.notes.filter(note => note.id === id)[0].content
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count
    }
  }
})
