<script>
export default {
  name: 'form-input',
  emits: ['submit', 'update:modelValue'],
  props: {
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    name: {
      type: String,
      required: false
    },
    placeholder: {
      type: undefined,
      required: false,
      default: ''
    },
    autocomplete: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: undefined,
      required: true
    }
  },
  methods: {
    onUpdate(value) {
      this.$emit('update:modelValue', value)
    },
    onKeyDown(e) {
      if (e.key == 'Enter') {
        this.$emit('submit')
      }
    }
  }
}
</script>

<template>
  <label :for="id">{{label}}</label>
  <flat-input
    :id="id"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :disabled="disabled"
    :autocomplete="autocomplete"
    :modelValue="modelValue"
    @keydown="onKeyDown"
    @update:modelValue="onUpdate"
    />
</template>

<style scoped>
  label {
    display: block;
    font-weight: 700;
  }
  input {
    font-weight: 400;
  }
</style>