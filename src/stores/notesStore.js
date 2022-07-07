import { defineStore } from 'pinia'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/firebase'

export const useNotesStore = defineStore('notesStore', {
  state: () => {
    return {
      notes: []
    }
  },
  actions: {
    async getNotes() {
      const querySnapshot = await getDocs(collection(db, 'notes'))
      querySnapshot.forEach((doc) => {
        let note = { id: doc.id, content: doc.data().content }
        this.notes.push(note)
      })
    },
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
