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
import { useAuthStore } from '@/stores/authStore'

let notesCollectionref
let notesCollectionQuery
let getNotesSnapshot

export const useNotesStore = defineStore('notesStore', {
  state: () => {
    return {
      notes: [],
      isLoading: false
    }
  },
  actions: {
    init() {
      const authStore = useAuthStore()
      notesCollectionref = collection(db, 'users', authStore.user.id, 'notes')
      notesCollectionQuery = query(notesCollectionref, orderBy('createdAt', 'desc'))
      this.getNotes()
    },
    async getNotes() {
      this.isLoading = true
      getNotesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
        const notes = []
        querySnapshot.forEach((doc) => {
          notes.push({
            id: doc.id,
            content: doc.data().content,
            createdAt: doc.data().createdAt
          })
        })
        this.notes = notes
        this.isLoading = false
      })
    },
    clearNotes() {
      this.notes = []
      if (getNotesSnapshot) getNotesSnapshot()
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
