import { defineStore } from 'pinia'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { useNotesStore } from '@/stores/notesStore'

export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      user: {}
    }
  },
  actions: {
    init() {
      const notesStore = useNotesStore()

      onAuthStateChanged(auth, user => {
        if (user) {
          this.user.id = user.uid
          this.user.email = user.email
          this.router.replace('/')
          notesStore.init()

          return
        }

        this.user = {}
        notesStore.clearNotes()
        this.router.replace('/auth')
      })
    },
    registerUser({ email, password }) {
      createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user
        console.log('user', user)
      }).catch(error => {
        console.log('error', error.message)
      })
    },
    loginUser({ email, password }) {
      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user
        console.log('loginUser', user)
      }).catch(error => {
        console.log('error', error.message)
      })
    },
    logoutUser() {
      signOut(auth).then(() => {
        this.router.replace('/auth')
      }).catch(error => console.log(error))
    }
  }
})