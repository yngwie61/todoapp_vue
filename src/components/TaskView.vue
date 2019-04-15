<template>
  <div class='task'>
    <v-data-table :headers="headers" :items='tasks' class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td v-if=props.item.flag class="text-xs-right"><v-btn v-on:click='click(props.item.name)' color='info'> Done </v-btn></td>
        <td v-else class="text-xs-right"><v-btn v-on:click='click(props.item.name)' color='warning'>Not Yet</v-btn></td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'TaskView',
  props: {
    tasks: Array
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
      ],
      desserts: [
        {
          name: 'Honeycomb',
          iron: '45%'
        },
        {
          name: 'Donut',
          iron: '22%'
        },
        {
          name: 'KitKat',
          iron: '6%'
        }
      ]
    }
  },
  methods: {
    click: function (msg) {
      this.$emit('child-event', msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
