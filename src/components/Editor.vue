<template>
	<div id="note-editor">
        <input name="header" v-model="editHead" type="text" class="form-control" placeholder="标题">
		<textarea @input="editNote" placeholder="笔记内容"> </textarea>
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