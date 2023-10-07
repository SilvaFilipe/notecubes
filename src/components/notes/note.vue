<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        {{ note.content }}

        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <router-link :to="`/edit-note/${note.id}`" href="#" class="card-footer-item">
        Edit
      </router-link>
      <a href="#" class="card-footer-item" @click.prevent="modals.deleteNote = true"> Delete </a>
    </footer>

    <modal-delete-note v-if="modals.deleteNote" v-model="modals.deleteNote" :note-id="note.id" />
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import ModalDeleteNote from '@/components/notes/modal-delete-note.vue'

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

const characterLength = computed(() => {
  const length = props.note.content.length
  const description = length > 1 ? 'characters' : 'character'
  return `${length} ${description}`
})

const modals = reactive({
  deleteNote: false
})
</script>
