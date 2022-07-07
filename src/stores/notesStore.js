import { defineStore } from 'pinia'
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from 'firebase/firestore'
import { db } from '@/firebase/firebase'

const notesCollectionref = collection(db, 'notes')
const notesCollectionQuery = query(notesCollectionref, orderBy('createdAt', 'desc'))

export const useNotesStore = defineStore('notesStore', {
  state: () => {
    return {
      notes: []
    }
  },
  actions: {
    async getNotes() {
      onSnapshot(notesCollectionQuery, (querySnapshot) => {
        const notes = []
        querySnapshot.forEach((doc) => {
          notes.push({
            id: doc.id,
            content: doc.data().content
          })
        })
        this.notes = notes
      })
    },
    async addNote(noteContent) {
      await addDoc(notesCollectionref, {
        createdAt: new Date().getTime().toString(),
        content: noteContent
      })
    },
    async deleteNote(id) {
      await deleteDoc(doc(notesCollectionref, id))
    },
    async updateNote(id, content) {
      await updateDoc(doc(notesCollectionref, id), { content })
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
