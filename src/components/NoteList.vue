<template>
	<div id="notes-list">
		<div id="list-header">
			<h2>{{name}}|{{username}}</h2>
			<div class="btn-group">
				<button type="button" class="btn btn-primary" @click="show('all')">所有笔记</button>
				<button type="button" class="btn btn-default" @click="show('favor')">喜欢的</button>
			</div>
		</div>
		<div class="container">
			<ul class="list-group">
			   <li class="list-group-item" v-for="item in notes" :class="{active: activeNote === item}" @click="updateActiveNote(item)">{{item.text}}</li class="list-group-item" >
			</ul>
		</div>
	</div>
</template>
<script>
// import {updateActiveNote} from '../vuex/actions.js'
import {mapActions,mapGetters} from 'vuex'
	export default{
		name:'notelist',
		data(){
			return {
				name:"笔记应用",
				username:"daisy",
				items:[{
					id:1,
					content:"第一条消息"
				},{
					id:2,
					content:"第二条消息"
				}]
			}
		},
		computed:{
          count(){
            return this.$store.state.count
          },
          notes(){
            return this.$store.state.notes
          },
          activeNote(){
          	return this.$store.state.activeNote
          }
        }, 
        // methods:mapActions(['updateActiveNote'])
		methods:{
			show:function(type){
				console.log(type);
			},
			updateActiveNote:function(note){
				this.$store.commit('SET_ACTIVE_NOTE', note)
			}
		}
	}
</script>
<style>
	#notes-list .container {
      height: calc(100% - 137px);
	  max-height: calc(100% - 137px);
	  overflow: auto;
     width: 100%;
     padding: 0;
}

#notes-list .container .list-group-item {
  border: 0;
  border-radius: 0;
}

</style>