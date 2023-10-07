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
      <a href="#" class="card-footer-item" @click.prevent="storeNotes.deleteNote(note.id)">
        Delete
      </a>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStoreNotes } from '@/stores/store-notes'

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

const storeNotes = useStoreNotes()

const characterLength = computed(() => {
  const length = props.note.content.length
  const description = length > 1 ? 'characters' : 'character'
  return `${length} ${description}`
})
</script>
