<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label v-if="label" class="label has-text-white">{{ label }}</label>

    <div class="field">
      <div class="control">
        <textarea
          :value="modelValue"
          ref="textareaRef"
          class="textarea"
          :placeholder="placeholder"
          maxlength="100"
          @input="$emit('update:modelValue', $event.target.value)"
          @keyup.enter="$emit('keyupEnter')"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'success'
  },
  placeholder: {
    type: String,
    default: 'Type something...'
  },
  label: {
    type: String
  }
})

const emits = defineEmits(['update:modelValue', 'keyupEnter'])

const textareaRef = ref(null)

const focusTextarea = () => textareaRef.value.focus()
onMounted(() => focusTextarea())

defineExpose({
  focusTextarea
})
</script>
