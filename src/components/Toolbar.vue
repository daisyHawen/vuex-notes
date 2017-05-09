<template>
	<div id="toolbar">
		<i @click="addNote" class="glyphicon glyphicon-plus"></i>
		<i @click="tooglefavorite" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i>
		<i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
	</div>
</template>
<script>
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
  methods:{
    addNote:function(){
      console.log('addNote');
    }, 
    tooglefavorite:function(){
      console.log('addNote');
      if(!this.activeNote.favorite){
      this.activeNote.favorite=true;

    }else{
      this.activeNote.favorite=false;

    }
    },
     deleteNote:function(){
      console.log('addNote');
    }
  }
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