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
import { v4 as uuid } from 'uuid'
import { nanoid, customAlphabet } from 'nanoid'

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
    idType() {
      return this.config.id_type || 'uuid'
    },
  },

  methods: {
    createId() {
      const generator = 'generate' + (this.idType.charAt(0).toUpperCase() + this.idType.slice(1))

      return this.prefix + this[generator]()
    },
    generateUuid() {
      return uuid()
    },
    generateNanoid() {
      const alphabet = this.config.alphabet || undefined
      const size = this.config.size ? parseInt(this.config.size) : undefined

      const generator = alphabet
        ? customAlphabet(alphabet)
        : nanoid

      return generator(size)
    },
  },

  mounted() {
    if (! this.value) {
      setTimeout(() => this.update(this.createId()), 100)
    }

    if (this.config.hidden) {
      this.$parent.$el.style.display = 'none'
    }
  }
}
</script>
