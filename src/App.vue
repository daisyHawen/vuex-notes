<template>
  <div id="app">  
    <toolbar></toolbar>
    <note-list></note-list>
    <editor></editor>
     <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p>{{count}}</p>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Toolbar from './components/Toolbar.vue'
import NoteList from './components/NoteList.vue'
import Editor from './components/Editor.vue'

export default {
  name: 'app',
  components: {
    Toolbar,
    NoteList,
    Editor
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  },  
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Raleway:400,300);
html, #app {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
}

#toolbar {
  float: left;
  width: 80px;
  height: 100%;
  background-color: #30414D;
  color: #767676;
  padding: 35px 25px 25px 25px;
}
#notes-list {
  float: left;
  width: 300px;
  height: 100%;
  background-color: #F5F5F5;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}
#note-editor {
  min-width: 600px;
  height: 100%;
  margin-left: 380px;
}
</style>
