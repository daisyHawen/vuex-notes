<template>
	<div id="note-editor">
        <input name="header" v-model="activeNoteHeader" type="text" class="form-control" placeholder="标题">
		<textarea v-model="activeNoteText" placeholder="笔记内容" @input="edit"> </textarea>
	</div>
</template>
<script>

	export default{
		name:'editor',
		data(){
			return {
				editNote:'',
				editHead:''
			}
		},
		computed:{
			activeNoteText(){
				return this.$store.state.activeNote.text
			},
			activeNoteHeader(){
				return this.$store.state.activeNote.header
			}
		},
		methods:{
			updateActiveNote:function(note){
				this.$store.commit('SET_ACTIVE_NOTE', note)
			},
			edit:function(e){
				console.log(e);
				// console.log(this.editNote);
				this.$store.commit('EDIT_NOTE', e.target.value)
			}
		}
	}
</script>
<style>
#note-editor input{
	border-radius: 0;
}
#note-editor textarea {
  height: 100%;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 0;
}
</style>