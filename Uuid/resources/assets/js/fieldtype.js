Vue.component('uuid-fieldtype', {
  mixins: [Fieldtype],

  template: '<div><input class="form-control" :class="{ \'bg-grey-light\': readonly }" v-model="data" :type="type" :readonly="readonly"></div>',

  computed: {
    type: function () {
      return this.config.hidden ? 'hidden' : 'text'
    },
    readonly: function () {
      return this.config.readonly || false
    },
    prefix: function () {
      return this.config.prefix || ''
    },
  },

  methods: {
    hide: function () {
      var el = this.$el
      var uuidClass = 'uuid-fieldtype'

      while (!el.classList.contains(uuidClass) && el.parentNode) {
        el = el.parentNode
      }

      if (el.classList.contains(uuidClass)) {
        el.style.display = 'none'
      }
    },
  },

  created: function () {
    this.data = this.data || this.prefix + uuidv4()
  },

  ready: function () {
    if (this.config.hidden) {
      this.hide()
    }
  }
});
