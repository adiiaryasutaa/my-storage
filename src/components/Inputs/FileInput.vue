<script>
import { ref } from 'vue';

export default {
	name: 'FileInput',
	props: {
		id: String,
		accept: String,
	},
	setup(props, context) {
		const fileInput = ref('');

		const emitFile = (event) => {
			context.emit('getFile', event.target.files[0]);
		};

		return { fileInput, emitFile };
	},
};
</script>

<template>
	<div>
		<input
			:id="id"
			class="input-file"
			type="file"
			:accept="accept"
			:ref="fileInput"
			@change="emitFile"
		/>
	</div>
</template>

<style scoped>
.input-file {
	@apply grow rounded text-xs font-lato w-full file:rounded file:outline-none file:border-0 file:text-base file:font-bold file:bg-indigo-600 file:px-2 file:py-1 file:text-slate-50 file:mr-2 hover:file:bg-indigo-700 active:file:bg-indigo-800;
}
</style>