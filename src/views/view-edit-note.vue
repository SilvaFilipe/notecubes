<template>
  <div class="edit-note">
    <add-edit-note
      v-model="noteContent"
      ref="addEditNoteRef"
      label="Edit note"
      bg-color="link"
      placeholder="Edit note"
      @keyupEnter="handleSaveClicked"
    >
      <template #buttons>
        <button class="button is-link is-light mr-2" @click="$router.back()">Cancel</button>
        <button
          class="button is-link has-background-link"
          :disabled="!noteContent.trim()"
          @click="handleSaveClicked"
        >
          Save note
        </button>
      </template>
    </add-edit-note>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AddEditNote from '@/components/notes/add-edit-note.vue'
import { useStoreNotes } from '@/stores/store-notes'
import { useRoute, useRouter } from 'vue-router'

const storeNotes = useStoreNotes()

const route = useRoute()
const router = useRouter()

const noteContent = ref('')

noteContent.value = storeNotes.getNoteContent(route.params.id)

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value)
  router.push('/')
}
</script>
