<template>
  <div id="app">
    <v-app>
      <AppBar></AppBar>
      <InputTask />
      <taskView />
    </v-app>
  </div>
</template>

<script>
import TaskView from './components/TaskView'
import InputTask from './components/InputTask'
import AppBar from './components/AppBar'

export default {
  name: 'App',
  components: {
    TaskView,
    InputTask,
    AppBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
