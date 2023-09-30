<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            ref="newNoteRef"
            class="textarea"
            placeholder="Add new note"
            @keyup.enter="addNote"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            class="button is-link has-background-success"
            :disabled="!newNote.trim()"
            @click="addNote"
          >
            Add new note
          </button>
        </div>
      </div>
    </div>

    <note
      v-for="note in notes"
      :key="note.id"
      class="mb-4"
      :note="note"
      @deleteClicked="deleteNote"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Note from '@/components/notes/note.vue'

const newNote = ref('')
const newNoteRef = ref(null)

const notes = ref([
  {
    id: 'id1',
    content:
      'hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 '
  },
  {
    id: 'id2',
    content: 'hello 2'
  }
])

const addNote = () => {
  if (!newNote.value.trim()) return

  const currentDate = new Date().getTime()
  const id = currentDate.toString()

  const note = { id, content: newNote.value }
  notes.value.unshift(note)
  newNote.value = ''
  newNoteRef.value.focus()
}

const deleteNote = (noteId) => {
  notes.value = notes.value.filter((n) => n.id != noteId)
}
</script>
