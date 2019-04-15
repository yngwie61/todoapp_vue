<template>
  <div class='InputTask'>
    <v-layout row wrap>
      <v-flex xs6>
        <v-form ref='form' v-on:submit.prevent='addtask(taskname)'>
          <v-text-field v-model='taskname' placeholder='input the task'></v-text-field>
          <v-btn v-on:click.prevent='addtask(taskname)' color='success' dark>Submit</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Vuetify from 'vuetify'

export default {
  name: 'InputTask',
  components: {
    Vuetify
  },
  data () {
    return {
      taskname: ''
    }
  },
  methods: {
    addtask: function (msg) {
      this.$emit('child-event', msg)
      this.taskname = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input{
  width: 130pt;
  height:30pt;
}
.button {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 70pt;
  border: solid 1px silver;
  border-radius: 0.5rem 0.5rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
}
</style>
