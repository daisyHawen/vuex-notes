<template>
	<div id="note-editor">
		<textarea @input="editNote"></textarea>
	</div>
</template>
<script>
	export default{
		name:'editor',
		data(){
			return {
				editNote:''
			}
		}
	}
</script>
<style>
#note-editor textarea {
  height: 100%;
  border: 0;
  border-radius: 0;
}
</style>