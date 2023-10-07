import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({
    notes: [
      {
        id: 'id1',
        content:
          'hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1'
      },
      {
        id: 'id2',
        content: 'hello 2'
      }
    ]
  }),
  actions: {
    addNote(content) {
      const currentDate = new Date().getTime()
      const id = currentDate.toString()
      const note = { id, content }
      this.notes.unshift(note)
    },
    deleteNote(id) {
      this.notes = this.notes.filter((n) => n.id != id)
    },
    updateNote(id, content) {
      const note = this.notes.find((n) => n.id == id)
      note.content = content
    }
  },
  getters: {
    getNoteContent: (state) => (id) => state.notes.find((n) => n.id == id).content,
    totalNotesCount: (state) => state.notes.length,
    totalCharactersCount: (state) => state.notes.reduce((sum, note) => sum + note.content.length, 0)
  }
})
