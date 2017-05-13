<template>
	<div id="toolbar">
		<i @click="addNote" class="glyphicon glyphicon-plus"></i>
		<i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i>
		<i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
	</div>
</template>
<script>
// import {addNote} from '../vuex/actions.js'
import {mapActions,mapGetters} from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to My Vue.js App',
      activeNote:{
        favorite:false
      }
    }
  },
  methods:mapActions(['addNote','deleteNote','toggleFavorite'])
  // methods:{
  //   addNote(){
  //     this.$store.commit('ADD_NOTE');
  //   },
  //   deleteNote(){
  //     this.$store.commit('DELETE_NOTE');
  //   },
  //   tooglefavorite(){
  //     this.$store.commit('TOGGLE_FAVORTE')
  //   },
  // }
}
</script>

<style>
  #toolbar i {
  font-size: 30px;
  margin-bottom: 35px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.5s ease;
}

#toolbar i:hover {
  opacity: 1;
}
.starred {
  color: #F7AE4F;
}
</style>