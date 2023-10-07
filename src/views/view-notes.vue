<template>
  <div class="notes">
    <add-edit-note
      v-model="newNote"
      ref="addEditNoteRef"
      placeholder="Add new note"
      @keyupEnter="addNote"
    >
      <template #buttons>
        <button :disabled="!newNote" class="button is-link has-background-success" @click="addNote">
          Add new note
        </button>
      </template>
    </add-edit-note>

    <note v-for="note in storeNotes.notes" :key="note.id" class="mb-4" :note="note" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import Note from '@/components/notes/note.vue'
import AddEditNote from '@/components/notes/add-edit-note.vue'
import { useStoreNotes } from '@/stores/store-notes'

const storeNotes = useStoreNotes()

const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
  if (!newNote.value.trim()) return

  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

watch(newNote, (newVal) => {
  if (newVal.length == 100) alert('Only 100 characters allowed!')
})
</script>
