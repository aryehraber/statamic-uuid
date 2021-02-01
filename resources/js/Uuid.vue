<template>
  <div class="input-group">
    <input
      class="input-text"
      :type="type"
      :value="value"
      :readonly="readonly"
      @input="update($event.target.value)"
    >
  </div>
</template>

<script>
import { uuid } from 'uuidv4'

export default {
  mixins: [Fieldtype],

  computed: {
    type() {
      return this.config.hidden ? 'hidden' : 'text'
    },
    readonly() {
      return this.config.read_only || this.config.readonly || false
    },
    prefix() {
      return this.config.id_prefix || ''
    },
  },

  mounted() {
    if (! this.value) {
      setTimeout(() => this.update(this.prefix + uuid()), 100)
    }

    if (this.config.hidden) {
      this.$parent.$el.style.display = 'none'
    }
  }
}
</script>
