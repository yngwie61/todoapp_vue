<template>
  <div class='task'>
    <v-data-table :headers="headers" :items='tasks' class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td v-if=props.item.flag class="text-xs-left"><v-btn v-on:click='TaskFinished(props.item.name)' color='info'> Done </v-btn></td>
        <td v-else class="text-xs-left"><v-btn v-on:click='TaskFinished(props.item.name)' color='warning'>Not Yet</v-btn></td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'TaskView',
  computed: {
    tasks () {
      return this.$store.state.tasks
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Task Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Status',
          sortable: false,
          value: 'status'
        }
      ]
    }
  },
  methods: {
    TaskFinished: function (msg) {
      this.$store.dispatch('TaskFinished', msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
